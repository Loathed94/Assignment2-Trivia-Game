<script setup>
import {useStore} from "vuex"
import {computed, ref} from 'vue'
const store = useStore()

    const props = defineProps({
        results: {
            type: Object,
            required: true
        }
    })
    const results = computed(() => store.state.results);

    const test = [ results.incorrect_answers, results.incorrect_answers, results.incorrect_answers];
const firstAnswer = ref(test[0]);


</script>

<template>
    <li class="mb-10">
        <h1>{{results}}</h1>
        <div >Question: {{results.question}}</div>
       <div> Correct answer: {{results.correct_answer}}</div>
        <div>User's answer: {{results.user_answer}}</div> 
    </li>
</template>

<style scoped>

</style>