import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/college',
      name: 'college',
      component: () => import('../views/College.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../views/Student.vue')
    }
  ]
})

export default router
