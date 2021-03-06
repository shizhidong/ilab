import axios from 'axios'
  
axios.interceptors.request.use(config => {
  //显示loading
  console.log("显示loading")
 return config
}, error => {
 return Promise.reject(error)
})
  
  
axios.interceptors.response.use(response => {
 return response
}, error => {
 return Promise.resolve(error.response)
})
  
function errorState(response) {
  //隐藏loading
  console.log("隐藏loading")
 console.log(response)
 // 如果http状态码正常，则直接返回数据
 if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
  return response
   // 如果不需要除了data之外的数据，可以直接 return response.data
 }else{
  Vue.prototype.$msg.alert.show({
      title: '提示',
      content: '网络异常'
  })
 }
  
}
  
function successState(res) {
  //隐藏loading
 //统一判断后端返回的错误码
 if(res.data.code==4005) {
  alert("请重新登录")
 }
}
const httpServer = (opts, data) => {
  
  let Public = { //公共参数
   'srAppid': ""
  }
  
  let httpDefaultOpts = { //http默认配置
     method:opts.method,
     baseURL:"api",
     url: opts.url,
     timeout: 1000,
     params:Object.assign(Public, data),
     data:Object.assign(Public, data),
     headers:{
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      'Authorization':""
     }
  }
  if(opts.method=='get'){
   delete httpDefaultOpts.data
  }else{
   delete httpDefaultOpts.params
  }
   
  let promise = new Promise(function(resolve, reject) {
   axios(httpDefaultOpts).then(
    (res) => {
     successState(res)
     resolve(res)
    }
   ).catch(
    (response) => {
     errorState(response)
     reject(response)
    }
   )
  
  })
 return promise
}
  
export default httpServer


 