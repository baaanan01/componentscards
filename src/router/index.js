import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) /*регистрируем библиотеку */



const routes = [
    {
          path: '/',
          name: 'Home',
          meta: {
            title: 'home'
          },
          component: () => import('@/pages/Home.vue')
        },
    {
      path: '/info',
      name: 'InfoPage', 
      meta: {
        title: 'Info'
      },
      component: () => import('@/pages/InfoPage.vue')
    },
    {
      path: "*",
      name: 'Error', 
      meta: {
        title: 'error'
      },
      component: () => import('@/pages/404.vue')
    },
    
  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router

