import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import listaDeConvidados from '../views/ListaDeConvidados.vue'
import rodasDeConversa from '../views/RodasDeConversa.vue'
import nomearGrupos from '../views/NomearGrupos.vue'
import favoritos from '../views/Favoritos.vue'
import expulsos from '../views/Expulso.vue'
import justificativaFavoritos from '../views/JustificativaFavoritos.vue'
import justificativaExpulso from '../views/JustificativaExpulso.vue'
import obrigado from '../views/Obrigado.vue'
import introducao from '../views/Introducao.vue'
import resultado from '../views/Resultado.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: login,
  },
  {
    path: '/Introducao',
    name: 'Introducao',
    component: introducao,
  },
  {
    path: '/ListaDeConvidados',
    name: 'ListaDeConvidados',
    component: listaDeConvidados,
  },
  {
    path: '/RodasDeConversa',
    name: 'RodasDeConversa',
    component: rodasDeConversa
  },
  {
    path: '/NomearGrupos',
    name: 'NomearGrupos',
    component: nomearGrupos
  },
  {
    path: '/Favoritos',
    name: 'Favoritos',
    component: favoritos
  },
  {
    path: '/Expulso',
    name: 'Expulso',
    component: expulsos
  },
  {
    path: '/JustificativaFavoritos',
    name: 'JustificativaFavoritos',
    component: justificativaFavoritos
  },
  {
    path: '/JustificativaExpulso',
    name: 'JustificativaExpulso',
    component: justificativaExpulso
  },
  {
    path: '/Obrigado',
    name: 'Obrigado',
    component: obrigado,
  },
  {
    path: '/Resultado',
    name: 'Resultado',
    component: resultado,
  }
  // //kept only for reference
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
