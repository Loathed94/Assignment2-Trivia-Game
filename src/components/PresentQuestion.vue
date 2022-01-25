<!--Feature components I can add to any view-->
<script setup>

import {ref} from 'vue';
import { apiAnswerRegister } from '../api/game';

//Variables linked to the v-model when changes to the answer options are being done
const firstOption = ref("");
const secondOption = ref("");
const thirdOption = ref("");
const fourthOption = ref("");

</script>
<template>




<form @submit.prevent="onSubmit">
    <!--Button to generate a question from the API-->
    <button 
        type="submit" 
        class="submit bg-emerald-400 text-white p-2 rounded">
        Get question</button>

    <fieldset class="mb-5">

        <!--Checkbuttons with answers generate from the API-->
        <label 
        class="block">Question name</label><br>
        <div id="answerCheckbox">

            <label for="firstOption">Answer number 1</label>
            <input 
                type="checkbox" 
                id="firstOption"
                v-model="firstOption"/><br>

            <label for="secondOption">Answer number 2</label>
            <input
                type="checkbox" 
                id="secondOption"
                v-model="secondOption"/><br>

            <label for="thirdOption">Answer number 3</label>
            <input 
                type="checkbox" 
                id="thirdOption"
                v-model="thirdOption"/><br>
            
            <label for="fourthOption">Answer number 4</label>
            <input 
                type="checkbox" 
                id="fourthOption" 
                v-model="fourthOption"/>
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