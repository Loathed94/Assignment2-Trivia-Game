<!--Feature components I can add to any view-->
<script setup>

import {ref} from 'vue';
import { apiAnswerRegister } from '../api/game';
const emit = defineEmits(["gameCompletedSuccessful"]);
const sendAnswer = answer => {
    emit("gameCompletedSuccessful", answer);
}
const props = defineProps({
        question: {
            type: Object,
            required: true
        }
    })
const correctAnswer = ref(props.question.correct_answer);
const incorrectAnswer = ref(props.question.incorrect_answers[0]);


//Variables linked to the v-model when changes to the answer options are being done
//const pickedOption = ref("");

</script>
<template>
    <!--Button to generate a question from the API-->
    <button type="button" @click="sendAnswer(correctAnswer)" 
        class="bg-emerald-400 text-white p-2 rounded">
        {{correctAnswer}}</button>

    <button type="button" @click="sendAnswer(incorrectAnswer)" 
        class="bg-emerald-400 text-white p-2 rounded">
        {{incorrectAnswer}}</button>

<!-- Generate different amount of buttons regarding what type is chosen; true/false or multiple choice -->
    
   
</template>

<style scoped>
</style>