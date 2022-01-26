<script setup>
import { useStore } from 'vuex';
import {computed, ref} from "vue";
import PresentResults from '../components/PresentResults.vue';
import router from '../router';

const store = useStore();
const score = ref(0);

const backToStart = () => {
  score.value *= 0
  router.push('/selection')
}

const highscore = computed(() => store.state.highScore);
const results = computed(() => store.state.results);

const calculateScore = async () => {
  for (const question of results.value) {
    if(question.correct_answer === question.user_answer){
      score.value += 10;
      //highscore += score.value
      //store.dispatch("updateScore", { score});
    }
  }
  if(score.value > highscore.value){
    console.log("Score before final",score.value);
    const finalScore = score.value;
    console.log("Final score: ",finalScore);
    const success = await store.dispatch('updateScore', finalScore);
    if(!success){
      throw new Error("Failed to update user score!");
    }
  }
}
/*const updateHighScore = async () => {
  await apiUpdateHighScore(userId, score.value);
}*/
console.log("Highscore: ",highscore.value);
calculateScore();
console.log(score.value);
</script>

<template>
  <ul>
      <PresentResults v-for="result in results" :key="result.question" :result="result" />

  </ul>
  <div>Current highscore: {{highscore}}</div>
  <div>Total score from game session: {{score}}</div>
  <div v-if="score>highscore">New highscore achieved! Highscore will be updated!</div>
  <button class="bg-emerald-400 text-white p-2 rounded mx-2" @click="backToStart">Replay</button>
</template>

<style scoped>

</style>