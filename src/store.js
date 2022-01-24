import {createStore} from 'vuex';
import { apiFetchCategories } from './api/questionDB';



export default createStore({
    state: {
        categories: [""],
    },
    getters : {
        getCategories: (state) => {
            return state.categories;
        }
    },
    mutations: {
       setCategories: (state, categories) => {
           state.categories = categories;
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
        }
    }
})