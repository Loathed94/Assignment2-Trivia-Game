<!--Components that are linked to the router-->
<script setup>
    import { useRouter } from 'vue-router';
    import PresentQuestion from '../components/PresentQuestion.vue';
</script>
<template>

    <main class="container mx-auto px-4">
    <h1 class="mb-5 text-2xl font-semibold">Questiontime!</h1>
    <PresentQuestion/>
    </main>

</template>

<style scoped>

</style>