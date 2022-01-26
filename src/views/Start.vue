<script setup>
import LoginForm from '../components/LoginForm.vue';
import {useRouter} from "vue-router";
const router = useRouter()
const handleAuthSuccess = () =>{
  //console.log("user is available")
  router.push("/Selection")
}
</script>

<template>
<main>
  <LoginForm @onAuthSuccess="handleAuthSuccess" />
</main>
</template>

<style></style>
