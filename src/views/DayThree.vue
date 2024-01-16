<script setup>
import { ref } from 'vue';

const img1 = "https://img.icons8.com/stickers/100/hand-rock-skin-type-1.png";
const img2 = "https://img.icons8.com/fluency/48/paper-hand.png";
const img3 = "https://img.icons8.com/emoji/48/victory-hand-emoji.png";
let number = "";
const answer = ref(true);
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
    answer.value=false
}
</script>

<template>
  <div class="m-0">
    <div>
    <h1 class="Title">Rock Paper Scissors</h1>
  </div>  
    <div class="flex justify-evenly ">
      <button @click="()=>clickedImage(1)" class="w-5/12 " ><img :src="img1" class="w-5/12  m-auto"></button>
      <button @click="()=>clickedImage(2)" class="w-5/12 " ><img :src="img2" class="w-5/12   m-auto"></button>
      <button @click="()=>clickedImage(3)" class="w-5/12" ><img :src="img3" class="w-5/12  m-auto"></button> 
  </div>
  <br>
  <div class="flex justify-center ml-16">
  <div v-if="result === null">
    <p class="text-orange-400 text-5xl">It's a Tie!</p>
  </div>
  <div v-else-if="result" >
      <h1 class="text-5xl">Congratulations You Won </h1>
  </div>
  <div v-else >
    <div v-if="answer">
      <h1 class="text-5xl">Start the Game</h1>
    </div>
    <div v-else>
      <h1 class="text-5xl" style="color: green; font-size: 38px;">Oops! Computer Wins!</h1>
    </div>
  </div>
</div>
    <br>  
  <div class="flex justify-center">
        <button class="w-5/12" ><img :src="number" class="w-5/12 m-auto"></button>
    </div>
</div>
</template>

<style>
.mainRock{
  background-color: rgb(81, 216, 126);
  height: 100%;
  flex-grow: 1;
}
.orange{
  background-color: rgb(242, 187, 166);
  height: 100%;
  flex-grow: 1;
}
.Title{
  margin-left: 40%;
  padding-top: 30px;
  font-size: 42px;
  font-weight: 600;
  color: rgb(55, 52, 52); 
}
.myButton {
    margin: 40px;
    height: 250px;
    width: 250px;
    border: none;
}
.randomImage {
    margin-left: 26%;
    width: 30%;
  height: 300px;
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
</style>
