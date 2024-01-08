<template>
<h1>Hello {{myName}}</h1>
</template>
<script setup ">
defineProps({
  myName: string
})
</script>