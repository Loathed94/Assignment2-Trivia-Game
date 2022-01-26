<script setup>
import {useStore} from "vuex"
import {computed, ref} from 'vue'
const store = useStore()

//respective props for the results
    const props = defineProps({
        result: {
            type: Object,
            required: true
        }
    })

    //variables for question, correct answer and user answer
    const question = ref(props.result.question);
    const correctAnswer = ref(props.result.correct_answer);
    const userAnswer = ref(props.result.user_answer);

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