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
          <h1><span>Name</span>:{{ user.name.firstname }} {{ user.name.lastname }}</h1>
          <p><span>Address</span>: {{ user.address.city }}, {{ user.address.street }}</p>
          <p><span>Phone Number</span>: {{ user.phone }}</p>
          <p><span>Email</span>: {{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.main{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.mainContainer {
  margin: 10px;
  margin-top: 60px;
}

.userContainer {
  width: 350px;
  background-color: #eef5ff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
}

span {
  font-weight: 500;
  font-size: 17px;
  margin-left: 10px;
}

.userName {
  margin-left: 10px;  
  font-weight: 600;
  font-size: 16px;
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

