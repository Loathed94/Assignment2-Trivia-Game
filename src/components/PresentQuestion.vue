<script setup>

import { useStore } from 'vuex';

const store = useStore();
const answerSubmitted = async () => {
  
}

</script>

<template>
<main class="container mx-auto" px-4>
    <!--Question 1-->
    <form @submit.prevent="answerSubmitted">
<!--Checkbox area-->
    <fieldset class="mb-3">
      <div class = "">
        <input 
          type="checkbox" 
          id = "checkbox"/>
      </div>  
    </fieldset>

<!--Submit the answer-->
    <fieldset class="mb-3">
      <button 
        class = "submitAnswerBtn" 
        type = "submit">Submit answer
      </button>
    </fieldset>

    </form>

    </main>
    <router-view></router-view>
</template>

<style scoped>

</style>