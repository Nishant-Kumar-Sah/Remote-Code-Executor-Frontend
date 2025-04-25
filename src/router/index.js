import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../components/Singup.vue'
import Signin from '../components/Signin.vue'
import Home from '../components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
