<script setup>
import { useCounterStore } from '@/stores/counter';
import EmitComponent from "../components/EmitComponent.vue"
import EmitFromComponent from "../components/EmitFormComponent.vue"
const $day4User = useCounterStore();
</script>
<template>
  <div>
    <div >
      <div class="flex justify-center">
        <EmitFromComponent />
      </div>
      <div class="flex">
        <div v-for="data in $day4User.day4userData" :key="data.id" >
          <div>
            <EmitComponent :user="data" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
