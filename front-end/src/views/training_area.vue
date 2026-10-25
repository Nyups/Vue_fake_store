<script setup>
import { ref, computed } from 'vue'

// 1. The search input state
const searchQuery = ref('')

// 2. Your list of products
const products = ref([
  { id: 1, name: 'Wireless Headphones', price: 59 },
  { id: 2, name: 'Mechanical Keyboard', price: 89 },
  { id: 3, name: 'Gaming Mouse', price: 45 },
  { id: 4, name: 'USB-C Hub', price: 25 }
])

// 3. The computed property that filters the products
const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
//
</script>

<template>
  <h2>Search bar component test</h2>
  <div class="search-container">
    <!-- Input linked to searchQuery -->
    <input 
      v-model="searchQuery" 
      type="text" 
      placeholder="Search products..." 
    />

    <!-- Displaying the filtered results -->
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
    
    <!-- Optional: Show a message if nothing matches -->
    <p v-if="filteredProducts.length === 0">No products found!</p>
  </div>
</template>