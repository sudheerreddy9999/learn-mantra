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
      path: '/day1',
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
    ,{
      path: '/day1/:id',
      name: 'day5',
      component: () => import('../components/SingleUserComponent.vue')
    }
    ,{
      path: '/day6',
      name: 'day6',
      component: () => import('../views/DaySix.vue')
    }
  ]
})

export default router
