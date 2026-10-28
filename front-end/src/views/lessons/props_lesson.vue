<script setup>
// [PROPS : Give data to components].
// Supposing we have a lesson file (well well well) has a parent component called "props_lesson.vue.vue"
// and a child component called "emit_lessons.vue".
// The "props" component know which data we're displaying.
// The "emit" component just need to receive that data and show it. For example it could go like :

//               [ShopView.vue]
//  product = { title: 'keyboard', price: 50}
//                    V
//            [ProductCard.vue]
//     Receives and displays the product 
//         product.title -> Keyboard

import emit_lesson from './emit_lesson.vue';

const product = {
    title: 'Keyboard',
    price: 80
}

function handleBuy(product) {
    console.log(`Adding to cart : ${product.title}`)
}

</script>

<template>
    <h1>Props Test</h1>
    
    <emit_lesson
    :product="product"
    @buy="handleBuy"/>
</template>

<style scoped></style>