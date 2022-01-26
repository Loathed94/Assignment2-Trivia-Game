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
        const correcAnswer = computed(() => store.state.results.correct_answer);
            
    const test = [ props.incorrect_answers, props.incorrect_answers, props.incorrect_answers];
const firstAnswer = ref(test[0]);


</script>

<template>
    <li class="mb-10">
        <h1>{{results}}</h1>
        <div >Question: {{results[0]}}</div>
       <div> Correct answer: {{correcAnswer}}</div>
        <div>User's answer: {{test.user_answer}}</div> 
    </li>
</template>

<style scoped>

</style>