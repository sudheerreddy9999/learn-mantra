<script setup>
import { defineProps } from 'vue';

const { userData } = defineProps(['userData']);
console.log(userData);
console.log("Hi");
</script>

<template>
  <div>
    <div class="main">
      <div class="mainContainer">
        <div class="userContainer">
          <p class="userName">{{ userData.username }}</p>
          <h1><span>Name</span>: {{ userData.name.firstname }} {{ userData.name.lastname }}</h1>
          <p><span>Address</span>: {{ userData.address.city }}, {{ userData.address.street }}</p>
          <p><span>Phone Number</span>: {{ userData.phone }}</p>
          <p><span>Email</span>: {{ userData.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.userContainer {
  width: 350px;
  background-color: #eef5ff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-left: 50px;
}
.mainContainer {
  margin: 10px;
  margin-top: 60px;
}

span {
  font-weight: 500;
  font-size: 22px;
  margin-left: 10px;
  padding-top: 10px;
}

.userName {
  margin-left: 10px;  
  font-weight: 600;
  font-size: 16px;
  color: black;
}
h1 {
  font-size: 18px;
}
button {
  border: none;
  height: 40px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  width: 200px;
}
</style>