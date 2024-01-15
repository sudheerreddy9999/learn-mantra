<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="flex gradient-background bg-gradient-background bg-180% animate-gradient-animation fixed w-full">
      <img class=" flex-none w-18 h-18 mx-10"  src="./assets/learn.png"  alt="book"/>
      <h1 class=" flex flex-auto w-64 justify-center items-center text-4xl text-white font-bold ">Mantra VueJs Learnings</h1>
      <img  class=" flex-none w-18 h-18 mx-10" width="68" height="48" src="./assets/Sudheer.png" alt="Sudheer"/>
    </div>
    <div class="flex max-h-screen">
    <div class="w-16 min-w-28">
      <header>

        <div class=" fixed mt-16 h-screen w-28 gradient-background bg-gradient-background bg-180% animate-gradient-animation ">

          <nav class="flex flex-col space-y-4 space-x-8">
           <br>
            <RouterLink to="/day1" active-class="activeRoute" class="routerLink"><img class="flex-none w-10 h-10" src="./assets/day1.png" alt="Day1"></RouterLink>
            <RouterLink to="/day2" active-class="activeRoute" class="routerLink"><img class="flex-none w-10 h-10" src="./assets/day2.png" alt="Day2"></RouterLink>
            <RouterLink to="/day3" active-class="activeRoute" class="routerLink"><img class="flex-none w-10 h-10" src="./assets/day3.png" alt="Day3"></RouterLink>
            <RouterLink to="/day4" active-class="activeRoute" class="routerLink"><img class="flex-none w-10 h-10" src="./assets/day4.png" alt="Day4"></RouterLink>
            <RouterLink to="/day1" active-class="activeRoute" class="routerLink"><img class="flex-none w-10 h-10" src="./assets/day5.png" alt="Day5"></RouterLink>
            <RouterLink to="/day6" active-class="activeRoute" class="routerLink"><img class="flex-none w-10 h-10" src="./assets/day6.png" alt="Day6"></RouterLink>
          </nav>
        </div>
      </header>

    </div>
    <div class="w-11/12  h-full ml-10 mt-28">
      <RouterView />
    </div>
  </div>
  </div>
  
</template>
<style>
.activeRoute {
  display: flex;
  justify-content: center;
}</style>
