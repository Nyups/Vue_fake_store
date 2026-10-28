<script setup>
import { ref, computed } from 'vue';

const price = ref(10)
const quantity = ref(3)

const totalPrice = computed(() => {
    return price.value * quantity.value
})



const finalPrice = computed(() => {
return totalPrice.value > 100 ?  totalPrice.value * 0.9 :  totalPrice.value
})


</script>

<template>
    <div class="heading">
        <h1>Training area</h1>
    </div>

    <div class="exercise">
        <h2>computed test</h2>

        <label for="price">Price</label>
        <input v-model.number="price" id="price" type="number">

        <label for="quantity">Quantity</label>
        <input v-model.number="quantity" id="quantity" type="number">

        <h3>Total : {{ totalPrice }}</h3>
        <h3>Final : {{ finalPrice }} </h3>
    </div>
</template>

<style scoped></style>