import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    meta: {layout: 'main'},
    component: () => import('@/views/Catalog.vue')
  },
  {
    path: '/Single_page',
    name: 'Single_page',
    meta: {layout: 'main'},
    component: () => import('@/views/SinglePage.vue')
  },
  {
    path: '/Single_page/:id',
    name: 'Single_page',
    meta: {layout: 'main'},
    component: () => import('@/views/SinglePage.vue')
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    meta: {layout: 'main'},
    component: () => import('@/views/Checkout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
