<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue'

const name = ref("sudheer");
const componentInfo = ref("show new component");
const isClicked = ref(false);

function changeClickState(){
  isClicked.value = !isClicked.value
  if(isClicked.value===false){
    componentInfo.value = "Show new Component"
  }else{
    componentInfo.value = "Hide New Component"
  }
}
</script>

<template>
<div v-if="!isClicked">
<header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it !" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
   
  <RouterView />
</div>
<button class="clikButton" @click="changeClickState">{{componentInfo}}</button>
  

  <div v-if="isClicked">
  <NewComponent /></div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.clikButton{
  background-color:#43766C    ;
  border:none;
  height:40px;
  border-radius:10px;
  color:white;
  font-size:16px;
  width:200px;
}
</style>
