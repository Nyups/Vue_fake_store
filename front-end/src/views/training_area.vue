<script setup>
import { ref, computed } from 'vue';
// Calculation test
const price = ref(10)
const quantity = ref(3)

const totalPrice = computed(() => {
    return price.value * quantity.value
})

const finalPrice = computed(() => {
return totalPrice.value > 100 ?  totalPrice.value * 0.9 :  totalPrice.value
})


// Searchbar test
const query = ref('')

const drones = ref([
    {id: 0,name: 'Cyn',type: 'Admin'},
    {id: 1,name: 'J',type: 'M_D'},
    {id: 2,name: 'V',type: 'M_D'},
    {id: 3,name: 'N',type: 'M_D'}
])

const droneFilter = computed(() => {
    return drones.value.filter(drone => // We filter and access the base drones array
    drone.name.toLowerCase().includes( // then we access the name properties and use include to compare them with the search query
    query.value.trim().toLocaleLowerCase() // Query value in lowercase
    )
   )    
})

</script>

<template>
    <div class="heading">
        <h1>Training area</h1>
    </div>

    <div class="calculation_test">
        <h2>computed test with live calculation</h2>

        <label for="price">Price</label>
        <input v-model.number="price" id="price" type="number">

        <label for="quantity">Quantity</label>
        <input v-model.number="quantity" id="quantity" type="number">

        <h3>Total : {{ totalPrice }}</h3>
        <h3>Final : {{ finalPrice }} </h3>
    </div>
    <br>

    <div class="searchbar_test">
        <h2>Searchbar Test</h2>
        <input type="text"
        v-model="query"
        placeholder="Enter drone name..."/>

        <div class="drone_id"
         v-for="drone in droneFilter"
         :key="drone.id"
        >
        <h3>Name: {{ drone.name }}</h3>
        <h3>Type: {{ drone.type }}</h3>
        </div>

    </div>

</template>

<style scoped></style>