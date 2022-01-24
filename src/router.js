import {createRouter, createWebHistory} from "vue-router";
import Start from './views/Start.vue'
import Question from './views/Question.vue';
import store from "./store";

const routes = [
    {
        path: "/",
        component: Start,
        beforeEnter: "nån authGuard-aktig-grej"
    },
    {
        path:"",
        component: Question,
    }
];



export default createRouter({
    history: createWebHistory(),
    routes
})