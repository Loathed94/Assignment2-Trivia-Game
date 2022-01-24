<script setup>
import { ref } from 'vue';
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import PresentQuestion from '../components/PresentQuestion.vue';

  const router = useRouter();
  const store = useStore();

  const correctAnswer = ref();

</script>

<template>
    <h1 class="mb-3 text-3xl">QUESTION</h1>
    
</template>

<style scoped>

</style>