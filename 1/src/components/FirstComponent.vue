<script setup>
import { onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter';
import UserComponent from './UserComponent.vue';

const $jdata1 = useCounterStore();

onMounted(async () => {
  await $jdata1.allUsersData();
});
</script>

<template>
  <div>
    <div v-if="$jdata1.usersData" class="mainContainer2">
      <div v-for="data in $jdata1.usersData" :key="data.id">
        <UserComponent :userData="data" />
      </div>
    </div>
  </div>
</template>

<style>
.mainContainer2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
