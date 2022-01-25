<!--Components that are linked to the router-->
<script setup>
    import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
    import PresentQuestion from '../components/PresentQuestion.vue';
    
    const router = useRouter();

//function to redirect to Result.vue when clicking submit button
const handleSubmitButton = () => {
    router.push('/Result.vue');
}

//function to get more radio buttons depending on which type is chosen
    
</script>
<template>

    <main class="container mx-auto px-4">
    <h1 class="mb-5 text-2xl font-semibold">Questiontime!</h1>
    <PresentQuestion @gameCompletedSuccessful="handleSubmitButton"/>
    </main>

</template>

<style scoped>

</style>