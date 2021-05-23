import { createRouter, createWebHistory } from 'vue-router'
import listaDeConvidados from '../views/ListaDeConvidados.vue'
import rodasDeConversa from '../views/RodasDeConversa.vue'

const routes = [
  {
    path: '/',
    name: 'ListaDeConvidados',
    component: listaDeConvidados
  },
  {
    path: '/rodasDeConversa',
    name: 'RodasDeConversa',
    component: rodasDeConversa
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
