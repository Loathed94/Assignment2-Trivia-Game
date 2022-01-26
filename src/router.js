//Imports
import {createRouter, createWebHistory} from "vue-router";
import store from "./store";
import Start from "./views/Start.vue"
import Question from './views/Question.vue';
import Selection from "./views/Selection.vue"
import Result from './views/Result.vue';

//Function to not return to start screen if you aren't in user storage
const authGuard = (to, from, next) => {
    if(!localStorage.getItem("user")){
        next("/")
    }else {
        next()
    }
}

//Function to if user ir registered, you return to the selection screen and not login screen
const loginGuard = (_to, _from, next) => {
    if(localStorage.getItem("user")){
        next("/selection")
    }else {
        next()
    }
}

const routes = [
    {
        path: "/",
        component: Start,
        beforeEnter: loginGuard
    }, 
    {
        path: "/selection",
        component: Selection,
        beforeEnter: authGuard
    },
   {
        path: "/questions",
        component: Question,
        beforeEnter: authGuard
    },
  {
        path: "/results",
        component: Result,
        beforeEnter: authGuard
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})