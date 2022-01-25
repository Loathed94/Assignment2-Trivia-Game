<!--Feature components I can add to any view-->
<script setup>

import {ref} from 'vue';
import { apiAnswerRegister } from '../api/game';
const emit = defineEmits(["gameCompletedSuccessful"]);


//Variables linked to the v-model when changes to the answer options are being done
const pickedOption = ref("");

</script>
<template>

<form @submit.prevent="onSubmit">

    <!--Button to generate a question from the API-->
    <button 
        type="submit" 
        class="submit bg-emerald-400 text-white p-2 rounded">
        GET A QUESTION</button>

<!-- Generate different amount of buttons regarding what type is chosen; true/false or multiple choice -->
    <fieldset class="mb-5">
        <label class="block">question</label><br>
            <div id="questionAnswerOptions">
                <label for="firstOption">Answer</label>
                    <input
                        type="radio"
                        id="questionOption"
                        v-model="pickedOption"/><br>

            </div>
      </fieldset>  

<!-- Submit the answer and redirect to result page-->
<!-- Use handleSubmitButton function from Question -->
    <button 
        class="submit bg-green-400 text-white p-2 rounded">
        Submit answer
    </button>

</form>
</template>

<style scoped>
</style>