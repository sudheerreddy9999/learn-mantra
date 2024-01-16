<script setup>
import { useCounterStore } from '@/stores/counter';
const submitUser = useCounterStore();
</script>

<template>  
  <div class="emitFormContainer">
    <h2>Add User</h2>
    <form @submit.prevent="submitUser.onFormUserSubmit">
      <div class="form-container">
        <div class="form-group">
          <label for="name" class="myLabel">Name:</label>
          <input type="text" id="name" v-model="submitUser.userName" class="emitInput" />
        </div>
        <div class="form-group">
          <label for="age" class="myLabel">Age:</label>
          <input type="text" id="age" v-model="submitUser.userAge" class="emitInput" />
        </div>
      </div>
      <button type="submit" class="formButton">Submit</button>
    </form>
  </div>
</template>

<style>
.emitFormContainer {
        width: 400px;
        height: 290px;
        margin-left: 30%;
        margin: 30px;
        border-radius: 20px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

h2 {
        padding: 20px;
        margin-left: 120px;
}

.formButton {
        display: block;
        width: 120px;
        height: 45px;
        border-radius: 20px;
        border: none;
        font-size: 18px;
        background-color: lightgreen;
        margin-left: 38%;
        margin-top: 30px;
}

.form-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
}

.form-group {
        display: flex;
        align-items: center;
}

.myLabel {
        margin-right: 10px;
        width: 80px;
        margin-left: 30px;
}

.emitInput {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
}</style>