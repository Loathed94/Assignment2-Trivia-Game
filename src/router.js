import {createRouter, createWebHistory} from "vue-router";
import store from "./store";
import Selection from "./views/Selection.vue"
import Start from "./views/Start.vue"

const loginGuard = (_to, _from, next) => {
    if(store.state.user){
        next("/selection")
    }
    else{
        next()
    }
}
const authGuard = (to, from, next) => {
    if(!store.state.user){
        next("/")
    }
    else{
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
];



export default createRouter({
    history: createWebHistory(),
    routes
})