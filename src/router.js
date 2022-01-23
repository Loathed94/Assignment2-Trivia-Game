import {createRouter, createWebHistory} from "vue-router";
import store from "./store";
import Selection from "./views/Selection.vue"

const routes = [
    {
        path: "/",
        component: Selection,
        //beforeEnter: "nån authGuard-aktig-grej"
    },
];



export default createRouter({
    history: createWebHistory(),
    routes
})