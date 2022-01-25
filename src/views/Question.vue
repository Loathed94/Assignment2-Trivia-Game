<!--Components that are linked to the router-->
<script setup>
    import { computed, onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import PresentQuestionBoolean from '../components/PresentQuestionBoolean.vue';
    import PresentQuestionMultiple from '../components/PresentQuestionMultiple.vue';
    
    const store = useStore();
    const router = useRouter();
    const questionsList = computed(() => store.state.questions);
    const count = ref(0);
    const currentQuestion = ref(questionsList.value[count.value]);
    const typeRef = ref(currentQuestion.value.type);
    const componentKeyBool = ref(1);
    const componentKeyMult = ref(1);
    //valuesReady();
    /*const valuesReady = () => {
        if(currentQuestion === undefined){
            return false;
        }
        return true;
    }*/

//function to redirect to Result.vue when clicking submit button
const handleSubmitButton = () => {
    router.push('/Result.vue');
}
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
        //console.log(currentQuestion.value);
        //this.$forceUpdate();
        componentKeyBool.value++;
        componentKeyMult.value++;
        //currentQuestion.value = questionsList.value[count.value];
        //type = currentQuestion.value.type;
    }
}

//function to get more radio buttons depending on which type is chosen
    
</script>
<template>

    <main class="container mx-auto px-4" >
        <h1 class="mb-5 text-2xl font-semibold">Questiontime!</h1>
        <PresentQuestionBoolean v-if="typeRef==='boolean'" @gameCompletedSuccessful="registerAnswer" :question="currentQuestion" :key="componentKeyBool"/>
        <PresentQuestionMultiple v-if="typeRef==='multiple'" @gameCompletedSuccessful="registerAnswer" :question="currentQuestion" :key="componentKeyMult"/> 
    </main>

</template>

<style scoped>

</style>