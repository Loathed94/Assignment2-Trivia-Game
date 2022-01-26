<script setup>
import { useStore } from 'vuex';
import {computed, ref} from "vue";
import PresentResults from '../components/PresentResults.vue';
const store = useStore();

    const props = defineProps({
        results: {
            type: Object,
            required: true
        }
    })

const calculateScore = () => {
  for (const question of results.value) {
    if(question.correct_answer === question.user_answer){
      score.value += 10;
    }
  }
}
const highscore = computed(() => store.state.user.highScore);
const results = computed(() => store.state.results);
const score = ref(0);
calculateScore();
console.log(score.value);
</script>

<template>
  <ul>
      <PresentResults v-for="result in results" :key="result.question" :result="result" />

  </ul>
  <div>Current highscore: </div>
  <div>Total score from game session: {{score}}</div>
</template>

<style scoped>

</style>