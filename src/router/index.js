import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
