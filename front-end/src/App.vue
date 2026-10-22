<script setup>
import { RouterView } from 'vue-router';
import side_bar from './components/side_bar.vue';
</script>

<template>
  <div class="layout">
    <side_bar />

    <main class="render-zone">
      <router-view />
    </main>
  </div>

</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.layout {
  display: flex;
  min-height: 100vh;
}

.render-zone {
  flex: 1;
  padding: 32px;
  background: #5a5a9c;
  min-width: 0;
  border-radius: 10px;
  margin: 0px 0px 0px 10px;
}
</style>
