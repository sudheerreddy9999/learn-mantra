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
    <div v-if="$jdata1.usersData" class="grid grid-rows-4  sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-2 gap-7 mt-4">
      <div v-for="data in $jdata1.usersData" :key="data.id">
        <UserComponent :userData="data" />
      </div>
    </div>
  </div>
</template>

<style>
</style>
