<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/college">College</RouterLink>
        <RouterLink to="/student">Student</RouterLink>
        <RouterLink to="/newcomponent">New Component</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

