<script setup>
  import { useStore } from 'vuex';
  import {computed, ref} from "vue";


  const store = useStore
  const categories = computed(() => store.getters.getCategories)
  const selected = ref("");
</script>

<template>
  <div id="select-category">
    <select v-model="selected">
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
  </div>
</template>
<style scoped>

</style>