<script setup>
import computed_lesson from './lessons/computed_lesson.vue';
</script>

<template>
    <div class="heading">
    <h1>Lesson Page</h1>
    <p>I store all I learned during this project here.</p>
    </div>
<br>
    <div class="lessons">
        <computed_lesson/>
    </div>
</template>

<style scoped></style>