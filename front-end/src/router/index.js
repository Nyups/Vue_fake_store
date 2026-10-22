import { createRouter, createWebHistory } from 'vue-router'

import home_view from '@/views/home_view.vue'
import shop_view from '@/views/shop_view.vue'
import cart_view from '@/views/cart_view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path :"/", component: home_view},
    {path :"/shop", component: shop_view},
    {path :"/cart", component: cart_view}
  ],
})

export default router
