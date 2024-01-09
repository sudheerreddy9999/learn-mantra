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

