import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import TestingView from '../views/TestingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test/:id',
      name: 'test',
      component: TestView,
      // props: true could be used to pass params as props
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingView,
    }
  ],
})

export default router
