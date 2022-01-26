<script setup>
//imports
  import { useStore } from 'vuex';
  import {computed, ref} from "vue";
  const emit = defineEmits(["startGameSuccessful"]);

  const store = useStore();
  const categories = computed(() => store.state.categories)

  //functionality when starting a trivia game
  const onStartGameClick = async () => {
    if(checkAcceptableQuantity()){
      const category = selected.value;
      const quantityVal = parseInt(quantity.value);
      const difficultyVal = difficulty.value;
      let code = 1;
      while(code !== 0){
        code = await store.dispatch("fetchQuestions", {category, quantityVal, difficultyVal});
        if(code === 1){
          fetchError.value = "ERROR: Too many questions, try reducing amount of questions or change one of the other settings.";
          return;
        }
        else if(code === 2){
          fetchError.value = "ERROR: Developers fucked up, request sent was invalid.";
          return;
        }
        else if(code === 3){ //Token invalid.
          console.log("Token invalid.")
          const resultingCode = await store.dispatch("fetchToken");
        }
        else if(code === 4){
          console.log("Token reset required.")
          const resultingCode = await store.dispatch('resetToken');
          if(resultingCode !== 0){
            console.log("Token reset -> fetch new.")
            await store.dispatch("fetchToken");
          }
        }
        else if(code !== 0){
          console.log(code);
          fetchError.value = "ERROR: We don't even know what the hell happened!";
        }
      }
      localStorage.setItem('question-settings', JSON.stringify({category: category, amount: quantityVal, difficulty: difficultyVal}));
      emit("startGameSuccessful");
    }
  }

  //variables for respective selection items and errors
  const selected = ref("");
  const quantity = ref("");
  const difficulty = ref("");
  const quantityError = ref("");
  const fetchError = ref("");

  //check if number of question are valid upon starting game
  const checkAcceptableQuantity = () => {
    if(Object.is(parseInt(quantity.value), NaN)){
      quantityError.value = "Must be a number, duh!"
      return false;
    }
    if(parseInt(quantity.value) > 50){
      quantityError.value = "There can not be more than 50 questions! Reduce your number!"
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
    <label for="quantity" aria-label="Quantity" class="block">Choose an amount of questions, max 50</label>
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
      <option :value="'easy'">Easy</option>
      <option :value="'medium'">Medium</option>
      <option :value="'hard'">Hard</option>
    </select>
  </fieldset>
  <div>
    <button @click="onStartGameClick()" type="button" class="bg-green-500 text-white p-3 rounded">Start game!</button>
  </div>
  </form>
  <div v-if="fetchError" class="bg-red-500 text-white p-3">
    <span class="block text-lg mb-3">Error</span>
    <p>{{fetchError}}</p>
  </div>
</template>
<style scoped>

</style>