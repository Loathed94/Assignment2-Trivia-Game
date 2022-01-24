import { createApp } from 'vue'
// import Start from './views/Start.vue'
import Question from './views/Question.vue'
import router from './router'
import store from "./store"
import './index.css'

createApp(Question).use(router).use(store).mount('#app')
