<script setup >
const props = defineProps(['data']);
const data = props.data;
console.log(props)
</script>
<template>
<h1>Hello</h1>
  <div class="main">
    <div class="mainContainer" v-for="userData in data" :key="userData.id" >
      <div class="userContainer">
        <p class="userName">{{ userData.username }}</p>
        <h1><span>Name</span>: {{ userData.name.firstname }} {{ userData.name.lastname }}</h1>
        <p><span>Address</span>: {{ userData.address.city }}, {{ userData.address.street }}</p>
        <p><span>Phone Number</span>: {{ userData.phone }}</p>
        <p><span>Email</span>: {{ userData.email }}</p>
      </div>
    </div>
  </div>
</template>
