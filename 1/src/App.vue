<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="mainCon">
    <header>  
  
      <div class="wrapper">
  
        <nav>
          <RouterLink to="/newcomponent" class="routerLink">Day 1</RouterLink>
          <RouterLink to="/day2" class="routerLink">Day 2</RouterLink>
          <RouterLink to="/day3" class="routerLink">Day 3</RouterLink>
          <RouterLink to="/day4" class="routerLink">Day 4</RouterLink>
        </nav>
      </div>
    </header>
  
    <RouterView />

  </div>
</template>
<style>
.mainCon{
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: row;
  justify-content: flex-start;

}
.routerLink{
  color: lightgreen;
  text-decoration: none;
}
.wrapper{
  width: 120px;
  height: 100%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px;
  color: lightgreen;
}
nav{
  font-size: 22px;
  display: flex;
}
header{
  width: 100px;
}
</style>
