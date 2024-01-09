<script setup>
import { defineProps } from 'vue';

const { userData } = defineProps(['userData']);
console.log(userData);
console.log("Hi");
</script>

<template>
  <div>
    <div class="main">
      <div class="mainContainer" v-for="user in userData" :key="user.id">
        <div class="userContainer">
          <p class="userName">{{ user.username }}</p>
          <h1><span>Name</span>: </h1>
          <p><span>Address</span>: {{ user.address.city }}, {{ user.address.street }}</p>
          <p><span>Phone Number</span>: {{ user.phone }}</p>
          <p><span>Email</span>: {{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
