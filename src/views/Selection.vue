<script setup>
    import { onMounted } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import SelectionItems from '../components/SelectionItems.vue';

    const router = useRouter();
    const store = useStore();

    onMounted(async () => {
        await store.dispatch("fetchCategories");
    })
    const viewQuestion = () => {
        router.push("/questions");
    }
</script>
<template>
    <main class="container mx-auto px-4">
        <h1 class="mb-3 text-2xl">Let's get a game of Trivia going!</h1>
        <SelectionItems @startGameSuccessful="viewQuestion" />
    </main>
</template>

<style scoped>

</style>