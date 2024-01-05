<script setup lang="ts">
import UserComponent from "./UserComponent.vue"
import { ref,onMounted } from 'vue';

const data = ref(null)
const oneUser = ref(false)
function changeOneUser(){
    oneUser.value = !oneUser.value;
}


onMounted(async()=>  {
      try {
        const response = await fetch('https://fakestoreapi.com/users');
           const jsonData = await response.json();
           data.value = jsonData;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })
    console.log(data) 
     
</script>
<template>
<button @click="changeOneUser"> show only one user</button>
<div v-if="oneUser"><UserComponent/></div>
<div class="mainContainer2">

<div class="mainContainer" v-for="data in data" v-if="!oneUser" >
<div class="userContainer">
<p class="userName">{{data.username}}</p>
<h1> <span>Name</span> :{{data.name.firstname}} {{data.name.lastname}}</h1>
<p><span>address</span> : {{data.address.city}}, {{data.address.street}}</p>
<p><span>Phone Number</span> : {{data.phone}}</p>
<p><span>E mail</span> : {{data.email}}</p>
</div>
</div>
</div>
</template>

<style>
.mainContainer2{
    display: grid;
  grid-template-columns: 1fr 1fr 1fr;
    margin-top:50px;
    margin-left:10px;

}
.userContainer{
    width:300px;
    height:200px;
    background-color:#EEF5FF;
    margin:20px;
   
    }
    span{
        font-weight:500;
        font-size:17px;
        margin-left:10px;
    }
    .userContainer{
        margin :10px; 
        padding:20px;
        border-radius:10px; 
    }
    .userName{
        margin-left:140px;
        font-weight:600;
        font-size:16px;
    }
    h1{
        font-size:18px
    }
    button{
       background-color:#43766C    ;
  border:none;
  height:40px;
  border-radius:10px;
  color:white;
  font-size:16px;
  width:200px; 
    }

</style>