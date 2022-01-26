<script setup>
    //Imports
    import { onMounted } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import SelectionItems from '../components/SelectionItems.vue';

    //Variables
    const router = useRouter();
    const store = useStore();

    //Function to fetch categories of questions
    onMounted(async () => {
        await store.dispatch("fetchCategories");
        if(localStorage.getItem("token") === null){
            await store.dispatch("fetchToken");
        }
        else{
            store.commit('setToken', localStorage.getItem("token"));
            console.log(store.state.token);
            console.log(localStorage.getItem("token"))
        }
    })
    //Function to view the questions
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