import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Wifi from '../views/Wifi.vue'
import Mylx from '../components/Mylx'
import regin from '../components/Register'
import Carousel from '../components/Carousel.vue'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/carousel',
    component: Carousel
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/regin',
    component: regin
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/mylx',
    component: Mylx
  },
  {
    path: '/wifi',
    component: Wifi
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/wifi',
    name: 'Wifi',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wifi" */ '../views/Wifi.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
})
export default router
