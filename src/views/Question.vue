<!--Components that are linked to the router-->
<script setup>
</script>

<template>
<main class="container mx-auto px-4">


<h1 class="mb-5 text-2xl">Press down below to get a question!</h1>

<form @submit.prevent="handleSubmit">
    <!--Button to generate a question from the API-->
    <button type="submit" class="bg-emerald-400 text-white p-2 rounded">Get question</button>

    <fieldset class="mb-5">
        <!--Checkbuttons with answers generate from the API-->
        <label class="block">Question name</label>
        <div id="answerCheckbox">
            <label for="firstOption">Answer number 1</label>
            <input 
            type="checkbox" 
            id="firstOption"
            v-model="checkedNames"/><br>

            <label for="secondOption">Answer number 2</label>
            <input
            type="checkbox" 
            id="secondOption"
            v-model="checkedNames"/><br>

            <label for="secondOption">Answer number 3</label>
            <input 
            type="checkbox" 
            id="thirdOption"
            v-model="checkedNames"/><br>
            
            <label for="secondOption">Answer number 4</label>
            <input 
            type="checkbox" 
            id="fourthOption" 
            v-model="checkedNames"/>
            

        </div>
      </fieldset>  
        <!-- <input type="checkbox" class="block" id="question.name"/>

    

Submit the answer and count the points, redirect to result page-->
<div class="form-group">
    <button class="btn btn-primary bg-green-400 text-white p-2 rounded">Submit answer</button>
</div>
<!-- <button type="submit" class="bg-green-400 text-white p-2 rounded">Submit answer</button> -->

</form>
</main>
</template>

<style scoped>

</style>