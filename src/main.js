// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import aIndex from './utils/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
import { from } from '_array-flatten@2.1.2@array-flatten';


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(aIndex)
localStorage.setItem("token", "1234")
console.log("3233333333333333", router)
router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token") == "" || localStorage.getItem("token") != 123) {
    alert("1")
  } else {
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
