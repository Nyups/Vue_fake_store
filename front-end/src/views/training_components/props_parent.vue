<script setup>
import emit_child from './emit_child.vue';
import { ref } from 'vue';

const ID = ref({
    name: 'Mimo',
    status: 'student',
    hobby: ['CS','Game dev','Optimization']
})



</script>

<template>
    <h1>Parent</h1>
    <emit_child :ID="ID" />
</template>

<style scoped></style>