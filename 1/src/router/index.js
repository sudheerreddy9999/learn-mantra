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
      path: '/newcomponent',
      name: 'newcomponent',
      component: () => import('../components/FirstComponent.vue')
    }
    ,{
      path: '/day2',
      name: 'day2',
      component: () => import('../views/DayTwo.vue')
    },  ,{
      path: '/day3',
      name: 'day3',
      component: () => import('../views/DayThree.vue')
    }
    ,{
      path: '/day4',
      name: 'day4',
      component: () => import('../views/DayFour.vue')
    }
  ]
})

export default router
