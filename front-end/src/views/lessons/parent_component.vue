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

// All of the main data are stored in the parent, sent to the child component via "props",
// And modified / updated in the parent via "emits" from the Child


import { ref } from 'vue';
import child_component from './child_component.vue'; // Allow us to use <child_component/> in our template

const playerName = ref('Mimo') // The data the parent own
const playerLevel = ref(1)

function handleLevelUp() {
    playerLevel.value++ // Update the level
}

// Test

</script>

<template>
    <h1>[Parent component]</h1>
    <h2>Level: {{ playerLevel }}</h2>
    <child_component 
    :name="playerName"
    :level="playerLevel"
    @level-up="handleLevelUp" /> 
    <!--"name" is the props/data we want to pass-->
    <!-- "@level-up" listen for the event the child component emit-->
</template>

<style scoped></style>