<script setup>
  import { useStore } from 'vuex';
  import {computed} from "vue";


  const store = useStore
  const categories = computed(() => store.getters.getCategories)
</script>

<template>
  <div>

  </div>
</template>
<style scoped>

</style>