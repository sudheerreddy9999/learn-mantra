<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>  

    <div class="wrapper">

      <nav>
        <RouterLink to="/newcomponent">Day 1</RouterLink>
        <RouterLink to="/day2">Day 2</RouterLink>
        <RouterLink to="/day3">Day 3</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style>
nav{
  font-size: 22px;
}
</style>
