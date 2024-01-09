<script setup>
import { ref, onMounted } from 'vue';
import UserComponent from './UserComponent.vue';

const jdata = ref([]);

async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/users');
    const jsonData = await response.json();
    jdata.value = jsonData;
    console.log(jdata.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(fetchData);

</script>

<template>
  <div>
    <div v-if="jdata.length > 0" class="mainContainer2">
      <UserComponent :userData="jdata" />
    </div>
  </div>
</template>

<style>
.mainContainer {
    display: flex;
  gap: 20px;
  margin-top: 50px;
  margin-left: 10px;
}

.userContainer {
  width: 100%;
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
  background-color: #43766c;
  border: none;
  height: 40px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  width: 200px;
}
</style>
