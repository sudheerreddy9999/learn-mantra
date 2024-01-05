<script>
import { ref,onMounted } from 'vue';
const oneValue = ref(null)
onMounted(async()=>  {
      try {
        const response = await fetch('https://fakestoreapi.com/users/1');
           const jsonData = await response.json();
           oneValue.value = jsonData;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })
    console.log(oneValue)
</script>
<template>
<div class="mainContainer">
<div class="userContainer">
<p>UserName </p>
<h1>Your Name</h1>
<p>address</p>
<p>Phone Number</p>
<p>E mail</p>
</div>
</div>
</template>