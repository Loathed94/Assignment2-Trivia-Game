import { createRouter, createWebHistory } from 'vue-router';
import Question from './views/Question.vue';

const routes = [
    {
        path: "/",
        component: Question
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})