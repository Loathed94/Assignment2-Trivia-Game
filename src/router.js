import {createRouter, createWebHistory} from "vue-router";
import store from "./store";
import Start from "./views/Start.vue"
import Selection from "./views/Selection.vue"

const authGuard = (to, from, next) => {
    if(!localStorage.getItem("user")){
        next("/")
    }else {
        next()
    }
}

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
    }
];



export default createRouter({
    history: createWebHistory(),
    routes
})