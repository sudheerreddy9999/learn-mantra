<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue'
</script>

<template>
<header>
    <div class="wrapper">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Student">Student Signup</RouterLink>
    </div>
  </header>
</template>

