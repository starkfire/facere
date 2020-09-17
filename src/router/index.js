import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Facere'
    }
  },
  {
    path: '/article',
    component: () => import('../views/Article.vue'),
    meta: {
      title: 'Facere'
    }
  },
  {
    path: '/portfolio',
    component: () => import('../views/Portfolio.vue'),
    meta: {
      title: 'Portfolio'
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
})

export default router
