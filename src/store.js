import {createStore} from 'vuex';
import { apiFetchCategories, apiFetchQuestions } from './api/questionDB';

import { apiUserRegister, apiGetUsers } from './api/users';


export default createStore({
    state: {
        user: null,
        categories: [],
        questions: [],
        results: []
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
       setHighscore: (state, newHighscore) => {
           state.user.highScore = newHighscore;
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
    }
  }
})
    
