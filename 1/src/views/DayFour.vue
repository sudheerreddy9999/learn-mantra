<script setup>
import { ref } from 'vue'
import EmitComponent from "../components/EmitComponent.vue"
import EmitFromComponent from "../components/EmitFormComponent.vue"
const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100)
}
const items = ref([
    {
        id: generateRandomNumber(),
        name: "sudheer",
        age: 22
    },
    {
        id: generateRandomNumber(),
        name: "lokesh",
        age: 24
    },
])
const handelUserData = (userValue) => {
    items.value.push(
        {
            id: generateRandomNumber(),
            name: userValue.name,
            age: userValue.age
        }
    )
}
const handeldeleteButton = (id) => {
    items.value = items.value.filter((user) => user.id !== +id);
};
</script>
<template>
    <div class="dayFourMain">
        <div class="form4">
            <EmitFromComponent @userDataSubmitted="handelUserData" />
        </div>
        <div v-for="data in items" class="userItems">
            <EmitComponent :user="data" @userDeleteValue="handeldeleteButton" />
        </div>
    </div>
</template>
<style>
.dayFourMain{
    display: flex;
}
.form4{
    margin-left: 10%;
}
.userItems{
    margin-top: 40%;
}
</style>