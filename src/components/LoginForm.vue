<script setup>
import { ref } from "vue";
//import {apiGetUsers, apiUserRegister} from "../api/users";
import {useStore} from "vuex"

const store = useStore()
const emit = defineEmits(["onAuthSuccess"]);
const username = ref("");
const displayError = ref("");

const onSuccess = user =>{

    emit("onAuthSuccess")
}
const onFailure = msg => {
  displayError.value = msg
}

const onRegister = async () => {
  const userName = username.value;
  const user = await store.dispatch("getUsers", { userName});
  if(user !== null){
    onFailure(user.username+" already exists!");
    return;
  }else if(user === null){
    const error = await store.dispatch("createUser", {userName});
        emit("onAuthSuccess")
    if(error !== null){
      onFailure(error);
      return;
    }
  }
  };

const onLogin = async () => {
  const userName = username.value;
  const user = await store.dispatch("getUsers", { userName});
  if(user !== null){
    store.commit("setUser", user);
    onSuccess(user)
  }else if(user === null){
    onFailure("You have to register first");
    return
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

    <button @click="onRegister" type="button">Register</button>
    <button @click="onLogin" type="button">Login</button>
  </form>
  <div v-if="displayError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-2">
    <p>
      {{displayError}}
    </p>
  </div>
</template>