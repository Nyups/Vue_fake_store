<script setup>
import { ref } from 'vue';
// Lesson import
import computed_lesson from './lessons/computed_lesson.vue';
import props_lesson from './lessons/props_lesson.vue';
import emit_lesson from './lessons/emit_lesson.vue';

const computedLesson = ref(false)

function toggle() {
    computedLesson.value = !computedLesson.value
}
</script>

<template>
    <div class="heading">
    <h1>Lesson Page</h1>
    <p>I store all I learned during this project here.</p>
    </div>
<br>
<!-- Lesson category-->
<div class="subject">
    <button @click="toggle" class="bubble-btn">
      Computed
    </button>
  </div>

<br>
    <div class="lessons">
        <computed_lesson v-if="computedLesson"/>
        <div class="props_emit">
        <props_lesson/>
        <emit_lesson/>
        </div>
    </div>
</template>

<style scoped>
.subject {
  display: block;
  justify-content: center;
  padding: 1rem;
}

.bubble-btn {
  background-color: #3d2c4f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  /* 3d Bottom Shadow Effect */
  box-shadow: 0 5px 0px #000000, 0 8px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.15s ease;
}

.bubble-btn:active {
  transform: translateY(4px);
  box-shadow: 0 1px 0px #c084fc, 0 3px 8px rgba(192, 132, 252, 0.3);
}
</style>