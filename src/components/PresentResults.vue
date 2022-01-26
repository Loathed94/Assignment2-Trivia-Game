<script setup>
import {useStore} from "vuex"
import {computed, ref} from 'vue'
const store = useStore()

    const props = defineProps({
        result: {
            type: Object,
            required: true
        }
    })
    //const resultObject =  ref(props.result);
    const question = ref(props.result.question);
    const correctAnswer = ref(props.result.correct_answer);
    const userAnswer = ref(props.result.user_answer);
            
    //const test = [ props.incorrect_answers, props.incorrect_answers, props.incorrect_answers];
    //const firstAnswer = ref(test[0]);


</script>

<template>
    <li class="mb-10">
        
        <span>Question: <span v-html="question"> </span></span>
       <span> Correct answer: <span v-html="correctAnswer"> </span></span>
       <span> User answer: <span v-html="userAnswer"> </span></span>
    </li>
</template>

<style scoped>

</style>