<!--Components that are linked to the router-->
<script setup>

</script>

<template>
<h1>Press down below to get a question!</h1>

<form>
    <!--Button to generate a question from the API-->
    <button type="submit" class="bg-emerald-400 text-white p-2 rounded">Get question</button>

    <fieldset>
        <!--Checkbuttons with answers generate from the API-->
        <label>Question name</label><br>
        <input type="checkbox" id="question.name"/>
        <input type="checkbox" id="question.name"/>
        <input type="checkbox" id="question.name"/>
        <input type="checkbox" id="question.name"/>

    </fieldset>

<!--Submit the answer and count the points, redirect to result page-->
<button type="submit" class="bg-green-400 text-white p-2 rounded">Submit answer</button>

</form>
</template>

<style scoped>

</style>