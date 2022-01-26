<script setup>
    //Imports
    import { computed, onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import PresentQuestionBoolean from '../components/PresentQuestionBoolean.vue';
    import PresentQuestionMultiple from '../components/PresentQuestionMultiple.vue';
    
    //Variables
    const store = useStore();
    const router = useRouter();
    const questionsList = computed(() => store.state.questions);
    const count = ref(0);
    const currentQuestion = ref(questionsList.value[count.value]);
    const typeRef = ref(currentQuestion.value.type);
    const questionDescription = ref(currentQuestion.value.question);
    const componentKeyBool = ref(1);
    const componentKeyMult = ref(1);

//Function to continue to results when clicking the submit button
const handleSubmitButton = () => {
    router.push('/results');
}

//Function to register answer
const registerAnswer = (answer) => {
    const resultObject = {
        question: currentQuestion.value.question,
        user_answer: answer,
        correct_answer: currentQuestion.value.correct_answer
    }
    store.commit('addResult', resultObject);
    count.value++;
    if(questionsList.value.length === count.value){
        handleSubmitButton();
    }
    else{
        currentQuestion.value = questionsList.value[count.value];
        typeRef.value = currentQuestion.value.type;
        questionDescription.value = currentQuestion.value.question;
        componentKeyBool.value++;
        componentKeyMult.value++;
    }
}    
</script>
<template>

    <main class="container mx-auto px-10 mt-10" >
        <h1 class="mb-5 text-2xl font-semibold" v-html="questionDescription"></h1>
        <PresentQuestionBoolean v-if="typeRef==='boolean'" @gameCompletedSuccessful="registerAnswer" :question="currentQuestion" :key="componentKeyBool"/>
        <PresentQuestionMultiple v-if="typeRef==='multiple'" @gameCompletedSuccessful="registerAnswer" :question="currentQuestion" :key="componentKeyMult"/> 
    </main>

</template>

<style scoped>

</style>