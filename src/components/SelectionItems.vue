<script setup>
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';


  const store = useStore();
  onMounted(async () => {
    await store.dispatch("fetchCategories");
})
</script>

<template>
  <div>

  </div>
</template>
<style scoped>

</style>