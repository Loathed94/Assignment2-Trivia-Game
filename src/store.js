import {createStore} from 'vuex';
import { apiFetchCategories, apiFetchQuestions, apiRequestToken, apiResetToken } from './api/questionDB';

import { apiUserRegister, apiGetUsers, apiUpdateHighScore } from './api/users';

const initUser = () => {
    const storedUser = localStorage.getItem("user");
    if(!storedUser){
        return null;
    }
    return JSON.parse(storedUser);
}

export default createStore({
    state: {
        results: [],
        user: initUser(),
        categories: [],
        questions: [],
        token: null
    },
    getters : {
        user: (state) => {
            return state.user
        }
    },
    mutations: {
        setUser: (state, user) =>{
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
       setCategories: (state, categories) => {
           state.categories = categories;
       },
       setQuestions: (state, questions) => {
           state.questions = questions;
       },
        addResult: (state, result) => {
           state.results.push(result);
       },
       setToken: (state, token) => {
           state.token = token;
       }
    },
    actions: {
        async getUsers({}, {userName}){
            const user = await apiGetUsers(userName);
            if(user === null){
                return null;
            }
            else{
                localStorage.setItem("user", JSON.stringify(user))
                return user;
            }
        },
        async createUser({commit}, {userName}){
            const user = await apiUserRegister(userName);
            if(user !== null){
                commit("setUser", user);
                return null;
            }
            else{
                return "Creating new user failed, try again!";
            }
        },
        
        async fetchCategories({commit}){
            const [categories, error] = await apiFetchCategories();
            if(error !== null){
                return error;
            }
            commit("setCategories", categories);
            localStorage.setItem("categories", JSON.stringify(categories));
        },
        async fetchQuestions({commit, state}, {category, quantityVal, difficultyVal}){
            const [code, results] = await apiFetchQuestions(category, quantityVal, difficultyVal, state.token);
            if(code === 0){
                commit("setQuestions", results);
                return 0;
            }
            else if(code === 4){
                const [newCode, results] = await apiFetchQuestions(category, quantityVal, difficultyVal, null);
                if(newCode === 1){
                    return 1;
                }
                else{
                    return 4;
                }
            }
            else{
                return code;
            }
        },
        async fetchToken({commit}){
            try {
                const [code, token] = await apiRequestToken();
                if(token === "" || token === undefined || code !== 0){
                    throw new Error("Unforeseen token-error!")
                }
                commit('setToken', token);
                localStorage.setItem("token", token);
                return;
            } catch (error) {
                return error.message;
            }
    },
    async updateScore({commit, state}, score){
        const finalScore = score;
        console.log("Score in store",finalScore);
        const updatedUser = await apiUpdateHighScore(state.user.id, finalScore);
        console.log("Score after fetch",score);
        console.log(updatedUser);
        if(updatedUser.id === state.user.id){
            commit('setUser', updatedUser);
            return true;
        }
        else{
            return false;
        }
    },
        async resetToken({commit, state}){
            const code = await apiResetToken(state.token);
            console.log("Token code ",code);
            return code;
        }
    }
})
    
