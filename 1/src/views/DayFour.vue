<script setup>
import { useCounterStore } from '@/stores/counter';
import EmitComponent from "../components/EmitComponent.vue"
import EmitFromComponent from "../components/EmitFormComponent.vue"
const $day4User = useCounterStore();
</script>
<template>
  <div>
    <div class="dayFourMain">
      <div class="form4">
        <EmitFromComponent />
      </div>
      <div v-for="data in $day4User.day4userData" :key="data.id" class="userItems">
        <EmitComponent :user="data" />
      </div>
    </div>
  </div>
</template>
<style>
.dayFourMain {
  display: flex;
}

.form4 {
  margin-left: 10%;
}

.userItems {
  margin-top: 40%;
}
</style>
