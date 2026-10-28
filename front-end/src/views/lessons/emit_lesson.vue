<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['buy'])

function buyProducts() {
    emit('buy', props.product)
}

</script>

<template>
    <h1>Emit lesson component</h1>

    <article>
        <h2>{{ product.title }}</h2>
        <p>Price : {{ product.price }}</p>

        <button @click="buyProducts">Buy</button>
    </article>
</template>

<style scoped></style>