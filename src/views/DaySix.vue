<script setup>
import { useCounterStore } from "../stores/counter"
const $name = useCounterStore();
</script>
<template>
    <div class="flex flex-col h-screen items-center ">
        <div>
            <h1 class="expenseTracker mt-20 text-2xl font-bold">Expense Tracker</h1>
        </div>
        <div class="mt-20">
            <label class="mr-10">Enter Members :</label>
            <input type="text" class=" m-5 h-10 mr-10 border border-gray-300" v-model="$name.members">
            <label class="mr-10">Enter Amount :</label>
            <input type="text" class="mr-10 border h-10 border-gray-300" v-model="$name.amount">
            <button class="bg-green-300 w-28 h-8 rounded-xl" @click="$name.calculateExpense">Split</button>
        </div>
        <div class="mt-16">
            <h1 class="text-xl"><span class="font-medium">per person :</span>{{ $name.splitAmount }}</h1>
        </div>
        <h1 class="mt-16 text-xl">Note : Created this expense tracker and converted remaining  code to pinia</h1>
    </div>
</template> 