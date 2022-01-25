<script setup>
import { ref } from "vue";
//import {apiGetUsers, apiUserRegister} from "../api/users";
import {useStore} from "vuex"

const store = useStore()
const emit = defineEmits(["onAuthSuccess"]);
const username = ref("");
const password = ref("");
const displayError = ref("");

/*const onSuccess = user =>{
  // if(this.$store.state.user){

  // }
    store.commit("setUser", user)
    emit("onAuthSuccess")
}*/
const onFailure = msg => {
  console.log(msg) //Bör va ett errormeddelande på vyn.
}

const onRegister = async () => {
  const userName = username.value;
  const user = await store.dispatch("getUsers", { userName});
  if(user !== null){
    onFailure(user.username+" already exists!");
    return;
  }else if(user === null){
    const error = await store.dispatch("createUser", {userName});//apiUserRegister(username.value)
    if(error !== null){
      onFailure(error);
      return;
    }
  }
   //console.log("success", user) //User blir skapad nu men skickas inte hit.
  };

const onLogin = async () => {
  const userName = username.value;
  const user = await store.dispatch("getUsers", { userName});
  if(user !== null){
    store.commit("setUser", user);
  }
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