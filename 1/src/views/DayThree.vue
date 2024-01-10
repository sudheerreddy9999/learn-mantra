<script setup>
import { ref } from 'vue';

const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreo2pk8ccBK5Sr68nN_zHMSMYy4EMmuqQmjO5RPu2zXPZIMqUXtzw7SYQ-RRHfrmvJ3U&usqp=CAU";
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV99ddM7Uk0kbCyCX0qdz6ivTfl2R3mZLGv_F36YK6nV3DxPENFECO-a_HHThDGltkZ5Q&usqp=CAU";
const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyJob5hcksKHEhaDgqD7g1122-WhLmEQAKVJiozWqvSjHlNr8Qy0rD2HG8ocMWBWS9QU&usqp=CAU";
let number = "";
const answer = ref(false);
const result = ref(false);
const userValue = ref(0);

function clickedImage(value) {
    userValue.value = value;
    setTimeout(callbackFunction, 100);
}

function callbackFunction() {
    const num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1:
            number = img1;
            break;

        case 2:
            number = img2;
            break;

        case 3:
            number = img3;
            break;

        default:
            console.log("Something went wrong");
    }

    console.log("User Choice:", userValue.value);
    console.log("Computer Choice:", num);

    if (userValue.value === num) {
        result.value = null;
    } else if (
        (userValue.value === 1 && num === 3) ||
        (userValue.value === 2 && num === 1) ||
        (userValue.value === 3 && num === 2)
    ) {
        result.value = true; 
    } else {
        result.value = false; 
    }

    answer.value = !answer.value;
}
</script>

<template>
  <div  :class="result?'mainRock':'orange'">
    <h1 class="Title">Rock Paper Scissors</h1>
    <div v-if="result === null" class="result">
      <h1 style="color:orange; font-size: 38px;" >It's a Tie!</h1>
  </div>
  <div v-else-if="result" class="result">
      <h1 class="day3h1">Congratulations! You Win!</h1>
  </div>
  <div v-else class="danger">
      <h1 class="day3h" style="color: green; font-size: 38px;">Oops! Computer Wins!</h1>
  </div>  
    <div class="imageButtons">
      <button @click="()=>clickedImage(1)" class="firstButton"><img :src="img1"></button>
      <button @click="()=>clickedImage(2)" class="myButton"><img :src="img2"></button>
      <button @click="()=>clickedImage(3)" class="myButton"><img :src="img3"></button>
  </div>
  <div>
      <button class="randomImage"><img :src="number"></button>
  </div>  
  </div>
    
</template>

<style>
.mainRock{
  background-color: rgb(81, 216, 126);
  border-radius: 30px;
}
.orange{
  background-color: rgb(242, 187, 166);
  border-radius: 30px;
}
.imageButtons{
  width: 90%;
  height: 80%;
  margin: 80px;
  
}
.Title{
  margin: 30px;
  margin-left: 34%;
  padding-top: 30px;
  font-size: 42px;
  font-weight: 600;
  color: rgb(55, 52, 52); 
}
.myButton {
    margin: 40px;
    height: 250px;
    width: 300px;
    border: none;
}
.randomImage {
    margin-left: 35%;
}
.firstButton{
  width: 200px;
}
.result {   
  width: 500px;
  color: rgb(242, 187, 166);
    margin-left: 30%;
    border-radius: 10px;
}
.danger {
  width: 500px;
  color: rgb(128, 243, 183);
    margin-left: 30%; 
    border-radius: 10px;
}
.day3h1 {
    margin: 10px;
    padding-top: 20px;
    padding-right: 20px;
    font-size: 32px;
    font-size: 38px;
    font-weight: 600px;
}
</style>
