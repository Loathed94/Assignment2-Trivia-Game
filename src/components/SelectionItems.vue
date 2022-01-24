<script setup>
  import { useStore } from 'vuex';
  import {computed, ref} from "vue";


  const store = useStore();
  const categories = computed(() => store.state.categories)
  /*store.subscribe((mutation, state) => {
      
  })*/
  console.log(categories);
  const selected = ref("");
  const quantity = ref("");
  const difficulty = ref("");
  const quantityError = ref("");
  const checkAcceptableQuantity = () => {
    if(parseInt(quantity.value) < 10 || parseInt(quantity.value) > 50){
      quantityError.value = "There must be between 10 and 50 questions, no more, no fewer!"
      return false;
    }
    else{
      quantityError.value = "";
      return true;
    }
  }
</script>

<template>
<form @submit.prevent="onSubmit" class="mb-3">
  <fieldset class="mb-3">
    <label for="select-category" aria-label="Select-Category" class="block">Select Category</label>
    <select v-model="selected" id="select-category" class="border border-slate-300">
      <option disabled value="">Please select category</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
  </fieldset>
  <fieldset class="mb-3">
    <label for="quantity" aria-label="Quantity" class="block">Choose amount between 10 and 50</label>
    <input type="tel" id="quantity" placeholder="How many questions?" class="border border-slate-300" v-model="quantity" @change="checkAcceptableQuantity">
  </fieldset>
  <div v-if="quantityError" class="bg-red-500 text-white p-3">
    <span class="block text-lg mb-3">Error</span>
    <p>{{quantityError}}</p>
  </div>
  <fieldset class="mb-3">
    <label for="difficulty" aria-label="Difficulty" class="block">Select Difficulty</label>
    <select v-model="difficulty" class="border border-slate-300" id="difficulty">
      <option disabled value="">Please select difficulty</option>
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>
  </fieldset>
  <div>
    <button @click="onRegisterLoginClick('login')" type="button" class="bg-green-500 text-white p-3 rounded">Start game!</button>
  </div>
  </form>
</template>
<style scoped>

</style>