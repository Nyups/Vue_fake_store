<script setup>
import { ref, onMounted } from 'vue';

//Variable area
const products = ref([])
const productCategory = ref([])



// fetching
const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/category-list')

    if(!response.ok) {
      throw new Error("Failed to fetch products!")
    }

    const fetched = await response.json()
    products.value = fetched // Send the data straight to the products variable
    //Also I must not forgot to pass the properties I want to display (in this case fetched.products)

    console.log(`Fetched product : ${products.value}`) // Log test
  } catch (error) {
    console.error("Something went wrong:", error)
    return error
  }
}

onMounted(() => {
  fetchProducts()
})

</script>

<template>
<div class="Search-area">
  <select name="category" id="category">
    <option value="" v-for="item in products">{{ item }}</option>
  </select>
  <input class="search-bar" type="text" placeholder="Search...">
  <button>🔍︎</button>
</div>

</template>

<style scoped>
/* Search Area */
.Search-area {
  display: flex;
  justify-content: center; 
  align-items: center;     
  margin: 20px 0; 
}

.Search-area select {
  height: 41px;
  font-size: 1rem;
  width: 30%;
}

.Search-area input {
  padding: 8px 12px;
  font-size: 1rem;
}

.Search-area button {
  height: 41px;
  width: 40px;
}

.search-bar {
  width: 100%;
  height: 21px;
}

/* Product Area */
</style>