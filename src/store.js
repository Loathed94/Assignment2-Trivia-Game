import {createStore} from 'vuex';
import { apiUserRegister, apiGetUsers } from './api/users';

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
        async getUsers({commit}){ //Förvirrande med en funktion som har samma namn som en i users.js
            const user = await apiGetUsers();
            commit("setUser", user);
        }
        //Ha en async-funktion som anropar getUsers i users.js.
    }
})