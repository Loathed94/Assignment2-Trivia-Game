import {createRouter, createWebHistory} from "vue-router";
import store from "./store";
import Start from "./views/Start.vue"
import Selection from "./views/Selection.vue"


const routes = [
    {
        path: "/",
        component: Start,
    },
    {
        path: "/selection",
        component: Selection
    }
];



export default createRouter({
    history: createWebHistory(),
    routes
})