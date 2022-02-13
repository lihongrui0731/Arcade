import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import BackgroundLayout from '../layouts/Background.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'

const routes = [
  {
    path: '/',
    component: BackgroundLayout,
    children: [
      {
        path: '/page1',
        name: 'map',
        component: Page1
      },
      {
        path: '/page2',
        name: 'Page2',
        component: Page2
      },
      {
        path: '',
        name: 'main',
        component: Page3
      },
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
