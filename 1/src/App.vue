<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="mainCon">
    <header>

      <div class="wrapper">

        <nav>
          <RouterLink to="/day1" active-class="activeRoute" class="routerLink">Day 1</RouterLink>
          <RouterLink to="/day2" active-class="activeRoute" class="routerLink">Day 2</RouterLink>
          <RouterLink to="/day3" active-class="activeRoute" class="routerLink">Day 3</RouterLink>
          <RouterLink to="/day4" active-class="activeRoute" class="routerLink">Day 4</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

  </div>
</template>
<style>
.mainCon {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #f5f7f8;
background-image: url("https://www.transparenttextures.com/patterns/clean-textile.png");
}
.routerLink {
  color: black;
  text-decoration: none;
  padding-left: 15px;
}

.wrapper {
  width: 120px;
  height: 100%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: #f5f7f8;
  background-image: url("https://www.transparenttextures.com/patterns/clean-gray-paper.png");
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px;
}

nav {
  font-size: 22px;
  display: flex;
}

header {
  width: 100px;
}
.activeRoute{
  width: 100px;
  border-radius: 10px;
  background-color: gray;
  display: flex;
  justify-content: center;
}
</style>
