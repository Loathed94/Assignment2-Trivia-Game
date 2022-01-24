<template>
    <!--Question 1-->

    <!--Create checkbox for answers of questions-->
    <form @submit.prevent = "handleSubmit">
      <div class = "">
        <label for = "title">Question</label>
        <input type="checkbox" id = "checkbox"/>
      </div>  

  <!--Submit the answer-->
      <div class = "submitAnswer">
      </div>
      <div class = "submitAnswer">
        <button class = "submitAnswerBtn" type = "submit">Submit answer</button>
      </div>
    </form>
</template>

<!-- <script setup>
//Show answer choices
  export default {
    data() {
      Answers: [
        {}
        {}
        {}
        {} -->
      ]
    }
  }
</script>

<style scoped>

</style>