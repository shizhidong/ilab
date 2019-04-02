import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import indexDetail from '@/pages/indexDetail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/indexDetail',
      name:'indexDetail',
      component:indexDetail
    }
  
  ]
})
