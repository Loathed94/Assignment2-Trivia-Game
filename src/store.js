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
        async getUsers({}, {userName}){
            const user = await apiGetUsers(userName);
            console.log("Store:",user);
            if(user === null){
                return null;
            }
            else{
                return user;
            }
        },
        async createUser({commit}, {userName}){
            console.log("Before API: ",userName);
            const user = await apiUserRegister(userName);
            console.log("Store: ",user);
            if(user !== null){
                commit("setUser", user);
                return null;
            }
            else{
                return "Creating new user failed, try again!";
            }
        }
    }
})