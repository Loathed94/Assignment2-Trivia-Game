<script setup>
import { useStore } from 'vuex';
import {computed, ref} from "vue";
import PresentResults from '../components/PresentResults.vue';
import { apiUpdateHighScore } from '../api/users';
import router from '../router';

const store = useStore();
const score = ref(0);

    const props = defineProps({
        results: {
            type: Object,
            required: true
        }
    })

const backToStart = () => {
  router.push('/selection')
  score.value *= 0
}

let highscore = computed(() => store.state.highScore);
const results = computed(() => store.state.results);

const calculateScore = () => {
  for (const question of results.value) {
    if(question.correct_answer === question.user_answer){
      score.value += 10;
      highscore += score.value
      store.dispatch("updateScore", { score});
    }
  }
}
const updateHighScore = async () => {
  await apiUpdateHighScore(userId, score.value);
}

calculateScore();
console.log(score.value);
</script>

<template>
  <ul>
      <PresentResults v-for="result in results" :key="result.question" :result="result" />

  </ul>
  <div>Current highscore: {{highscore}}</div>
  <div>Total score from game session: {{score}}</div>
  <button class="bg-emerald-400 text-white p-2 rounded mx-2" @click="backToStart">Replay</button>
</template>

<style scoped>

</style>