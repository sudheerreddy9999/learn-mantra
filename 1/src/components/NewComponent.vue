<script setup lang="ts">
import UserComponent from "./UserComponent.vue"
import SecondComponet from "./SecondComponent.vue"
import { ref,onMounted } from 'vue';

const jdata = ref([])
const newName = ref("sudheer");
onMounted(async()=>  {
      try {
        const response = await fetch('https://fakestoreapi.com/users');
           const jsonData = await response.json();
           jdata.value = jsonData;
           console.log(jdata.value)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })
</script>
<template>
<div><UserComponent :data="jdata.value"/></div>
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
     box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
   
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