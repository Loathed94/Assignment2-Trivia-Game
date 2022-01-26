<script setup>
//Imports
import LoginForm from '../components/LoginForm.vue';
import {useRouter} from "vue-router";
const router = useRouter()

//Function to handle auth
const handleAuthSuccess = () =>{
  router.push("/Selection")
}
</script>

<template>
<main>
  <LoginForm @onAuthSuccess="handleAuthSuccess" />
</main>
</template>

<style></style>
