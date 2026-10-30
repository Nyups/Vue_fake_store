<script setup>
defineProps({ // "defineProps" declare the data our component accepts and what type of data it is
    name: String,
    level: Number
})

const emit = defineEmits(['level-up']) // We define the emit

function levelUp() { // When this function run, it emits the event.
    emit('level-up')
}
</script>

<template>
    <h1>[Child component]</h1>
    <h2>Name passed from the parent: {{ name }}</h2>
    <button @click="levelUp">Level up</button> <!-- We connect it to our button -->
</template>

<style scoped></style>