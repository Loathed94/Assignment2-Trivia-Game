import {createRouter, createWebHistory} from "vue-router";
import store from "./store";

const routes = [
    {
        path: "/",
        component: "StartScreen",
        beforeEnter: "nån authGuard-aktig-grej"
    },
];



export default createRouter({
    history: createWebHistory(),
    routes
})