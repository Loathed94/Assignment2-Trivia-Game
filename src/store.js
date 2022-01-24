import {createStore} from 'vuex';
import { apiUserRegister } from './api/users';

export default createStore({
    state: {
        user: null
    },
    getters : {
        user: (state) => {
            return state.user
        },

    },
    mutations: {
       setUser: (state, user) =>{
           state.user = user
       }
    },
    actions: {
        //Gör api call här
        async getUsers({commit}){
            const [user] = await apiUserRegister();
            commit("setUser", user);
        }
         
    }
})