import {createRouter, createWebHistory} from 'vue-router';
import store from "./store";
import Start from './views/Start.vue'
import Question from './views/Question.vue';
import store from "./store";
import Vue from 'vue';

const routes = [
    {
        path: "/",
        component: Start,
        beforeEnter: ""
    },
    {
        path:"/question",
        component: Question,
        beforeEnter: ""
    }
];

export default createRouter({
    history: createWebHistory(),
    routes    
});