import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title:"index",
        requiresAuth: true
      }
    }
  ]
})
