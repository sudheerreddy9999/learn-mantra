<script setup>
import FormComponent from "../components/FormComponent.vue";
import { ref } from 'vue';
const array = ref([
    {
        id:1,
        type:"text",
        name:"student Id",
        placeholder:"Student Id"
    },
    {
        id:2,
        type:"text",
        name:"Name",
        placeholder:"user Name"
    },
    {
        id:3,
        type:"text",
        name:"Email",
        placeholder:"Enter Your Email"
    },
    {
        id:4,
        type:"textArea",
        name:"Enter Query",
        placeholder:"Enter Query"
    },
]
);
</script>
<template>
  <FormComponent :name="array" />
</template>