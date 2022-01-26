import {createStore} from 'vuex';
import { apiFetchCategories, apiFetchQuestions } from './api/questionDB';

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
        results: [],
        highScore: 0
    },
    getters : {
        user: (state) => {
            return state.user
        }
    },
    mutations: {
        setUser: (state, user) =>{
            state.user = user
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
       setHighScore: (state, highScore) => {
           state.user.highScore = highScore
       }
    },
    actions: {
        async getUsers({}, {userName}){
            const user = await apiGetUsers(userName);
            console.log("Store:",user);
            if(user === null){
                return null;
            }
            else{
                localStorage.setItem("user", JSON.stringify(user))
                return user;
            }
        },
        async createUser({commit}, {userName}){
            console.log("Before API: ",userName);
            const user = await apiUserRegister(userName);
            console.log("Store: ",user);
            if(user !== null){
                commit("setUser", user);
                localStorage.setItem("user", JSON.stringify(user))
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
        async fetchQuestions({commit}, {category, quantityVal, difficultyVal}){
            const [code, results] = await apiFetchQuestions(category, quantityVal, difficultyVal);
            if(parseInt(code) === 0){
                commit("setQuestions", results);
                return null;
            }
            else if(parseInt(code) === 1){
                return "ERROR: Too many questions, try reducing amount of questions or change one of the other settings.";
            }
            else if(parseInt(code) === 2){
                return "ERROR: Developer fucked up, request sent was invalid.";
            }
            else if(parseInt(code) === 3){
                return "ERROR: Token invalid.";
            }
            else if(parseInt(code) === 4){
                return "ERROR: Reset token and try again.";
      }
    },
    async updateScore({commit, state}, {score}){
        console.log("Score in store",score);
        const updatedUser = await apiUpdateHighScore(state.user.id, score);
        console.log("Score after fetch",score);
        console.log(updatedUser);
        if(updatedUser.id === state.user.id){
            commit('setUser', updatedUser);
            return true;
        }
        else{
            return false;
        }
        /*if(userHighScore == 0){
            commit("setHighScore", userHighScore)
        }*/
    },
  }
})
    
