import { createRouter, createWebHistory } from 'vue-router'

import home_view from '@/views/home_view.vue'
import shop_view from '@/views/shop_view.vue'
import cart_view from '@/views/cart_view.vue'
import training_area from '@/views/training_area.vue'
import lesson_page from '@/views/lesson_page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path :"/", component: home_view},
    {path :"/shop", component: shop_view},
    {path :"/cart", component: cart_view},
    {path: "/training", component: training_area},
    {path: "/lesson", component: lesson_page}
  ],
})

export default router
