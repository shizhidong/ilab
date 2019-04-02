import http from './http'
import api from './api'
export default{
    install:function(Vue,options){
        Vue.prototype.$http = http;
        Vue.prototype.$api = api;
    }
}