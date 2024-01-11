<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const { userData } = defineProps(['userData']);
const router = useRouter();
console.log(userData);
console.log("Hi");
</script>

<template>
  <div class="main">
    <div class="userContainer">
      <div class="userHeader">
        <div> <img src="../assets/download.jpeg" class="userImg"></div>
        <div>
          <h1 class="userName"> {{ userData.name && userData.name.firstname }} {{ userData.name && userData.name.lastname
          }}</h1>
          <div class="emailUser">
            <div>
              <img src="../assets/phone.png" class="phoneImg">
            </div>
            <div>
              <p>{{ userData.phone }}</p>
            </div>
          </div>
          <div class="emailUser">
            <div>
              <img src="../assets/email.jpg" class="emailImg">
            </div>
            <div>
              <p>{{ userData.email }}</p>
            </div>
          </div>
          <a class="moreDetails" @click="router.push(`/day1/${userData.id}`)"> view More details</a>

        </div>
      </div>
    </div>
  </div>
</template>
<style>
.main {
  display: flex;
}

.userContainer {
  width: 100%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-left: 50px;
  margin-top: 60px;
}

.userImg {
  width: 120px;
  border-radius: 50%;
}

.mainContainer {
  margin: 10px;

}

.moreDetails {
  color: lightcoral;
  font-size: 14px;
  padding-left: 80px;
}

span {
  font-weight: 500;
  font-size: 19px;
  margin-left: 10px;
  padding-top: 10px;
}

.emailUser {
  display: flex;
  justify-content: center;
  align-items: center;
}

.userName {
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
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

.userHeader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.emailImg {
  width: 40px;
}

.phoneImg {
  width: 20px;
}</style>