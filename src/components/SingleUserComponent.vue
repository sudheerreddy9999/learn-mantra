<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.params)
const userData = ref({});
async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/users/${route.params.id}`);
        const jsonData = await response.json();
        userData.value = jsonData;
        console.log(userData.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
onMounted(fetchData);
function previous(){
    window.history.back();

}

</script>

<template>
     
    <div class="singleUserComponent">
        <div class="singleUser1">
            <img @click="previous"  class="flex-none w-10 h-10" src="../assets/back.png" alt="Day1">
            <img src="../assets/download.jpeg" class="userImg" id="SingleUserImg">
            <h1 class="userName" id="singleUserH1">{{ userData.username }}</h1>
        </div>
        <div class="singleUser2">
            <div class="nameCity">
                <h1> {{ userData.name && userData.name.firstname }} {{ userData.name && userData.name.lastname }} </h1>
                <p> {{ userData.address && userData.address.city }} </p>
                <hr>
            </div>
            <div class="moreInfoSingleUser">
                <p><span class="singleUserSpan">Email : </span>{{ userData.email }} </p>
                <p><span class="singleUserSpan">City : </span>{{ userData.address && userData.address.city }}</p>
                <p><span class="singleUserSpan">Address :</span> {{ userData.address && userData.address.city }}, street {{
                    userData.address && userData.address.street }}</p>
                <p><span class="singleUserSpan">Phone :</span> {{ userData.address && userData.phone }} </p>
            </div>
        
        </div>

    </div>
</template>

<style>
.singleUserComponent {
    width: 600px;
    height: 300px;
    display: flex;
    margin-left: 30%;
    margin-top: 10%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    
}

.singleUser1 {
    width: 250px;
    background-color: #f5f7f8;
    background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
}

.singleUser2 {
    width: 350px;
    background-color: #f5f7f8;
background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png");    
}

#SingleUserImg {
    margin: 50px;
    width: 150px;
    margin-bottom: 0px;
}

#singleUserH1 {
    margin-left: 100px;
    font-size: larger;
    font-weight: 600;
}

.nameCity { 
    margin-bottom: 10px;
}

.nameCity h1 {
    font-size: 32px;
    font-weight: 600;
}

.singleUserSpan {
    font-weight: 300;
    font-size: 16px;
    width: 100px;
    margin-top: 20px;
    display: inline-block;
    width: 100px;
}

.moreInfoSingleUser {
    font-weight: 500;
    font-size: 18px;
    margin-left: 10px;
}
</style>
