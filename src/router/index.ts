import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupForm from '@/components/SignupForm.vue'
import SigninForm from '@/components/SigninForm.vue'
import DashBoard from '@/components/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'SignupForm',
      component: SignupForm
    },
    {
      path: '/signin',
      name: 'SigninForm',
      component: SigninForm
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name === 'DashBoard' && !token) {
    next({ name: 'home' })
  } else if (
    (to.name === 'home' || to.name === 'SignupForm' || to.name === 'SigninForm') &&
    token
  ) {
    next({ name: 'DashBoard' })
  } else {
    next()
  }
})

export default router
