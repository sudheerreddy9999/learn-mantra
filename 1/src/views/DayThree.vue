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
    <div>
        <button @click="()=>clickedImage(1)" class="firstButton"><img :src="img1"></button>
        <button @click="()=>clickedImage(2)" class="myButton"><img :src="img2"></button>
        <button @click="()=>clickedImage(3)" class="myButton"><img :src="img3"></button>
    </div>
    <div>
        <button class="randomImage"><img :src="number"></button>
    </div>
    <div v-if="result === null" class="result">
        <h1>It's a Tie!</h1>
    </div>
    <div v-else-if="result" class="result">
        <h1>Congratulations! You Win!</h1>
    </div>
    <div v-else class="danger">
        <h1>Oops! Computer Wins!</h1>
    </div>
</template>

<style>
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
    width: 400px;
    height: 100px;
    background-color: green;
    margin-left: 30%;
    border-radius: 10px;
}
.danger {
    width: 400px;
    height: 100px;
    background-color: red;
    margin-left: 30%;
    border-radius: 10px;
}
h1 {
    margin: 10px;
    padding-top: 20px;
    padding-right: 20px;
    color: rgb(245, 204, 204);
    font-size: 32px;
}
</style>
