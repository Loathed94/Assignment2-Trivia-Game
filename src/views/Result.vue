<script setup>
//Imports
import { useStore } from 'vuex';
import {computed, ref} from "vue";
import PresentResults from '../components/PresentResults.vue';
import router from '../router';

//Variables
const store = useStore();
const score = ref(0);

//Function to replay the game with new questions, return to the start of questions page
const replayGame = () => {
  score.value *= 0
  store.commit('clearResults')
  router.push('/questions')
}

const highscore = store.state.user.highScore;
const results = computed(() => store.state.results);

//Function to calculate the score
const calculateScore = async () => {
  for (const question of results.value) {
    if(question.correct_answer === question.user_answer){
      score.value += 10;
    }
  }
  if(score.value > highscore){
    console.log("Score before final",score.value);
    const finalScore = score.value;
    console.log("Final score: ",finalScore);
    const success = await store.dispatch('updateScore', finalScore);
    if(!success){
      throw new Error("Failed to update user score!");
    }
  }
}
calculateScore();

//Function to replay the game when clicking the replay button
const onReplayClick = async () => {
  const settings = JSON.parse(localStorage.getItem('question-settings'));
  console.log(settings);
      const category = settings.category;
      const quantityVal = settings.amount;
      const difficultyVal = settings.difficulty;
      let code = 1;
      while(code !== 0){
        code = await store.dispatch("fetchQuestions", {category, quantityVal, difficultyVal});
        if(code === 3){ 
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
      }
      replayGame();
  }
  //Function for not be able to replay, return to the selection page
  const onBackToStartClick = () => {
    localStorage.removeItem('question-settings');
    score.value *= 0;
    store.commit('clearResults');
    router.push('/selection');
  }
</script>

<template>
  <ul>
      <PresentResults v-for="result in results" :key="result.question" :result="result" />

  </ul>
  <div>Current highscore: {{highscore}}</div>
  <div>Total score from game session: {{score}}</div>
  <div v-if="score>highscore">New highscore achieved! Highscore will be updated!</div>
  <button class="bg-emerald-400 text-white p-2 rounded mx-2" @click="onReplayClick">Replay</button>
  <span><button class="bg-emerald-400 text-white p-2 rounded mx-2" @click="onBackToStartClick">Back to selection</button></span>
</template>

<style scoped>

</style>