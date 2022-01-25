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

    <fieldset class="mb-5">

        <!--generate the questions from the API setup in the previous step-->
        <label 
        class="block">Question name</label><br>
        <div id="answerCheckbox">
<!--Checkbuttons with answers generate from the API-->
            <label for="firstOption">Answer number 1</label>
            <input 
                type="radio" 
                id="firstOption"
                v-model="pickedOption"/><br>

            <label for="secondOption">Answer number 2</label>
            <input
                type="radio" 
                id="secondOption"
                v-model="pickedOption"/><br>

            <label for="thirdOption">Answer number 3</label>
            <input 
                type="radio" 
                id="thirdOption"
                v-model="pickedOption"/><br>
            
            <label for="fourthOption">Answer number 4</label>
            <input 
                type="radio" 
                id="fourthOption" 
                v-model="pickedOption"/>
            <br>
        </div>
      </fieldset>  

<!-- Submit the answer and count the points, redirect to result page-->
    <button 
        class="submit bg-green-400 text-white p-2 rounded">
        Submit answer</button>

</form>
</template>

<style scoped>
</style>