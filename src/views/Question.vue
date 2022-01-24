<script setup>
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import PresentQuestion from '../components/PresentQuestion.vue'
  
</script>

<template>
<main class="container mx-auto" px-4>
    <!--Question 1-->
    <h1 class="mb-3 text-3xl">QUESTION</h1>
    <form>

<!--Checkbox area-->
      <fieldset class="mb-3">
      <div class = "">
        <input type="checkbox" id = "checkbox"/>
      </div>  
      </fieldset>

<!--Submit the answer-->
      <fieldset class="mb-3">
        <button class = "submitAnswerBtn" type = "submit">Submit answer</button>
      </fieldset>
    </form>
    </main>
</template>

<style scoped>

</style>