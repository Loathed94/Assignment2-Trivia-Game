import {createStore} from 'vuex';
import { apiFetchCategories, apiFetchQuestions } from './api/questionDB';



export default createStore({
    state: {
        categories: [],
        questions: []
    },
    getters : {
    },
    mutations: {
       setCategories: (state, categories) => {
           state.categories = categories;
       },
       setQuestions: (state, questions) => {
           state.questions = questions;
       }
    },
    actions: {
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