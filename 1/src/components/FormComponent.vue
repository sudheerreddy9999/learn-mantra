<script setup>
import { ref, defineProps } from 'vue';
const props=defineProps(['name','formtype']);
const myData = props.name;
const inputValues = {};
myData.forEach(input => {
    inputValues[input.name] = ref("");
});
const sendData= () => {
    const userData = {};
    myData.forEach(input => {
        userData[input.name] = inputValues[input.name].value;
    });
    const storedData = JSON.parse(localStorage.getItem("mydata")) || [];
    storedData.push(userData);
    localStorage.setItem("mydata", JSON.stringify(storedData));
};
</script>
<template>
  <div class="form" :id="formtype">
    <h1 class="formName">{{ formtype }}</h1>
    <form @submit.prevent="sendData">
        <div v-for="name in name" class="form-group">
            <label :for="name.name">{{name.name}}</label>
            <input
        :type="name.type"
        v-model="inputValues[name.name].value" 
        :placeholder="name.placeholder"
        class="text"
        />
        </div>
      <button class="button">Submit</button>
    </form>
    <div></div>
  </div>
</template>
<style>
.form {
  margin-top: 100px;
  margin-left: 0px;
  width: 500px;
  height: 590px; 
  margin-left: 50%; 
  align-items: center;
  justify-content: center;
  border-radius: 20px;      
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
label{
  width: 140px;
  margin-left: 50px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 30px;
}
input{
  margin-left: 20px;
  margin-bottom: 30px;
}
.formName{
  margin: 30px;
    margin-left: 160px;
    padding-top: 30px;
    font-size: 32px;
    font-weight: 600;
    color: lightgreen;
}
.text {
  display: block;
  width: 200px;
  height: 45px;
  border-radius: 10px;
}
.button{
display:block;
width: 120px;
height: 45px;
border-radius: 20px;
border: none;
font-size: 18px;
background-color: lightgreen;
margin-left: 38%;
}
.form-group{
  display: flex;
  align-items: center;
}
#College_Form{
  height: 500px;
}
</style>
