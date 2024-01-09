<script setup>
import { ref, defineProps } from 'vue';
const props=defineProps(['name']);
console.log(props.name)
console.log("hello")
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
  <div class="form">
    <h1>Student Details</h1>
    <form @submit.prevent="sendData">
        <div v-for="name in name">
            <label :for="name.name">{{name.name}}</label>
            <input
        :type="name.type"
        v-model="inputValues[name.name].value" 
        :placeholder="name.placeholder"
        class="text"
        />
        </div>
        
      <input type="radio" id="one" value="Male"  />
      <label for="one">Female</label>
      <input type="radio" id="two" value="Female"  />
      <label for="two">Male</label >
      <input type="text" id="Email" name="Email" class="text" />
      <button class="button">Submit</button>
    </form>
    <div></div>
  </div>
</template>

<style>
.form {
  margin-top: 200px;
  margin-left: 0px;
  width: 400px;
  height: 480px; 
  margin-left: 35%; 
  align-items: center;
  justify-content: center;
  border-radius: 20px;      
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
input{
    margin-left: 80px;
}
h1{
    margin: 30px;
    margin-left: 100px;
}
.text {
  display: block;
  width: 200px;
  height: 30px;
  border-radius: 10px;
}
.forButton{
display:block;
}
.button{
display:block;
margin-top: 30px;
width: 100px;
height: 40px;
border-radius: 20px;
border: none;
background-color: lightgreen;
margin-left: 35%;
}
</style>
