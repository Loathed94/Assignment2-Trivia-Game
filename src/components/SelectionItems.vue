<script setup>
  import { useStore } from 'vuex';
  import {computed, ref} from "vue";


  const store = useStore();
  const categories = computed(() => store.getters.getCategories)
  const selected = ref("");
  const quantity = ref("");
  const difficulty = ref("");
  const quantityError = ref("");
  const checkAcceptableQuantity = () => {
    if(parseInt(quantity.value) < 10 || parseInt(quantity.value) > 50){
      quantityError.value = "There must be between 10 and 50 questions, no more, no fewer!"
    }
    else{
      quantityError.value = "";
    }
  }
</script>

<template>
  <div id="select-category">
    <select v-model="selected">
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
  </div>
  <div>
    <input type="tel" id="quantity" placeholder="How many questions?" class="border border-slate-300" v-model="quantity" @change="checkAcceptableQuantity">
  </div>
  <div v-if="quantityError" class="bg-red-500 text-white p-3">
    <span class="block text-lg mb-3">Error</span>
    <p>{{quantityError}}</p>
  </div>
  <div>
    <select v-model="difficulty">
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>
  </div>
</template>
<style scoped>

</style>