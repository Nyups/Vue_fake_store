<script setup>
const props = defineProps({
    ID: Object
})
</script>

<template>
    <h1>Child component</h1>

    <div class="card">
        <h2>{{ props.ID.name }}</h2>
        <p>{{props.ID.status}}</p>
        <h3>Hobby :</h3>
        <ul>
            <li v-for="hobby in props.ID.hobby" :key="hobby">
                {{ hobby }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>