
<script setup>
import { ref, onMounted } from 'vue'

// Variable area
const products = ref([])
const productsCategory = ref([])
const selectedCategory = ref('')

// Fetch categories
const fetchCategory = async () => {
  try {
    const response = await fetch(
      'https://dummyjson.com/products/category-list'
    )

    if (!response.ok) {
      throw new Error('Failed to fetch categories!')
    }

    const fetched = await response.json()
    productsCategory.value = fetched

  } catch (error) {
    console.error('Something went wrong:', error)
  }
}

// Fetch products based on category
async function fetchProducts(categoryName) {
  if (!categoryName) {
    products.value = []
    return
  }

  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${encodeURIComponent(categoryName)}` // nani
    )

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    const fetchedProducts = await response.json()
    products.value = fetchedProducts.products

    console.log('Fetched products:', products.value)

  } catch (error) {
    console.error('Invalid category:', error)
    products.value = [] 
  }
}

onMounted(() => {
  fetchCategory()
})
</script>

<template>
  <section>
    <div class="Search-area">
      <select
        id="category"
        v-model="selectedCategory" 
        @change="fetchProducts(selectedCategory)"
      >
        <option disabled value="">Select a category</option>

        <option
          v-for="item in productsCategory"
          :key="item"
          :value="item"
        >
          {{ item }}
        </option>
      </select>

      <input
        class="search-bar"
        type="text"
        placeholder="Search..."
      />

      <button>🔍︎</button>
    </div>

    <div class="product-grid">
      <article
        class="product-card"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.thumbnail" :alt="product.title" />

        <h3>{{ product.title }}</h3>

        <p>{{ product.price }} €</p>
      </article>
    </div>
  </section>
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
  background-color: rgb(25, 25, 61);
  color: white;
  border-radius: 5px;
  border: solid rgb(25, 25, 61);
}

.search-bar {
  width: 100%;
  height: 21px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: contain;
}

.product-card h3 {
  font-size: 1rem;
}

.product-card p {
  font-weight: bold;
}
</style>