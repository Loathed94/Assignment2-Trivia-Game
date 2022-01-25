<script setup>
import { ref } from "vue";
import {apiGetUsers, apiUserRegister} from "../api/users";
import {useStore} from "vuex"

const store = useStore()
const emit = defineEmits(["onAuthSuccess"]);
const username = ref("");
const password = ref("");
const displayError = ref("");

const onSuccess = user =>{
  // if(this.$store.state.user){

  // }
    store.commit("setUser", user)
    emit("onAuthSuccess")
}

const onRegister = async () => {
  console.log(username.value);
  //Anropa först en metod i store.js som kollar efter användaren med get-metoden.
     let user = await apiGetUsers( username.value);
      if(user){
          onSuccess(user)
      }else if(!user){
        user = await apiUserRegister(username.value)
        console.log("New user created", username.value)
      }
  //Sen om resultatet visar att user inte fanns, anropa funktionen nedan.
   
   
  console.log("success", user)
};

const onLogin = async () => {
  console.log(username.value);
  //Anropa först en metod i store.js som kollar efter användaren med get-metoden.
  //Sen om resultatet visar att user fanns, anropa funktionen nedan.
       
};

</script>

<template>
      <form 
    >
    <fieldset>
      <label for="username">Username</label>
      <input
      id="username"
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="E.g..john.doe@email.com"
        v-model="username"
      />
    </fieldset>

    <fieldset>
      <label for="password">Password</label>
      <input
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="******"
        v-model="password"
      />
    </fieldset>
    <button @click="onRegister" type="button">Register</button>
    <button @click="onLogin" type="button">Login</button>
  </form>
  <div v-if="displayError">
    <p>
      {{displayError}}
    </p>
  </div>
</template>