<template>
  <aside class="sidebar">
    <h2>Navigation</h2>

    <nav>
      <RouterLink to="/">⌂ Home</RouterLink>
      <RouterLink to="/shop">𖠩 Shop</RouterLink>
      <RouterLink to="/cart"> Cart</RouterLink>
      <RouterLink to="/training">training Area</RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 30%;
  min-height: 100vh;
  padding: 20px;
  background: #222433;
  color: white;
  border-radius: 10px;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  background-color: #7869a9;
  border-radius: 5px;
}

nav a.router-link-active {
  color: #b8a2ff;
}
</style>