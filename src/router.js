import { createRouter, createWebHistory } from 'vue-router';
import Question from './views/Question.vue';
import Result from './views/Result.vue';

const routes = [
    {
        path: "/",
        component: Question
    },
    {
        path: "/result",
        component: Result
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})