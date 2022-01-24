<script setup>
import { useStore } from 'vuex';
import {computed} from "vue";
import PresentResults from '../components/PresentResults.vue';

const store = useStore();

const results = computed(() => store.state.results)
</script>

<template>
  <ul>
      <PresentResults v-for="result in results" :key="result.question" :result="result" />
  </ul>
</template>

<style scoped>

</style>