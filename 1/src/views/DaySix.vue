<script setup>
import {useCounterStore} from "../stores/counter"
const $name = useCounterStore();
</script>
<template>
    <div class="day6Main">
        <h1 class="expenseTracker">Expense Tracker</h1>
        <label class="day6Label">Enter Members :</label>
        <input type="text" class="day6Text" v-model="$name.members">
        <label class="day6Label">Enter Amount :</label>
        <input type="text" class="day6Text" v-model="$name.amount">
        <button class="splitButton" @click="$name.calculateExpense">Split</button>
        <h1 class="resultDay6">Result :{{$name.splitAmount}}</h1>
    </div>
</template>
<style>
.expenseTracker{
margin: 40px;
margin-left: 300px;
}
.day6Main{
    margin: 25%;
    margin-top: 16%;
}
.day6Label{
    margin-left: 10px;
    font-size: 16px;
}
.day6Text{
    width: 200px;
    height: 40px;
    margin-left: 10px;
    border-radius: 10px;
    font-size: 18px;

}
.splitButton{
    background-color:greenyellow;
    color: black;
    margin-left: 50px;
    height: 45px;
    width: 100px;
    border: none;
    border-radius: 8px;
}
.resultDay6{
    margin-left: 38%;
    margin-top: 50px;
}
</style>    