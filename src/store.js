import {createStore} from 'vuex';


export default createStore({
    state: {
        categories: []
    },
    getters : {
        
    },
    mutations: {
       setCategories: (state, categories) => {
           state.categories = categories;
       }
    },
    actions: {
        async fetchCategories({commit, state}){
            const categories = await apiFetchCategories();
            commit("setCategories", categories);
        }
    }
})