<script setup>
import { ref, defineProps } from 'vue'
import { useCounterStore } from '@/stores/counter';
const { user } = defineProps(['user'])
const deleteUser = useCounterStore();
console.log(user.value)
const emit = defineEmits(['userDeleteValue'])
function handeldeleteValue(userId) {
    console.log(userId);
    emit('userDeleteValue', userId)
}
</script>
<template>
    <div class="userMainContainer">
        <div class="userMain">
            <div class="users">
                <p class="userInfo"><span class="formSpan">userName : </span>{{ user.name }}</p>
                <p class="userInfo"> <span class="formSpan">age :</span> {{ user.age }}</p>
                <button @click="() =>deleteUser.deleteDay4User(user.id)" class="deleteButton">delete</button>
            </div>
        </div>
    </div>
</template>
<style>
.users {
    width: 250px;
    height: 160px;
    margin: 30px;
    border-radius: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.deleteButton {
    display: block;
    width: 80px;
    height: 35px;
    border-radius: 20px;
    border: none;
    font-size: 18px;
    background-color: orange;
    margin-left: 58%;
}
.userInfo{
    font-size: 22px;

}
.formSpan{
    width: 80px;
    color: lightgreen;
    font-weight: 800px;
}
p{
    margin-top: 20px;
}
</style>