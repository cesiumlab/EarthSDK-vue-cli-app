import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

function startup() {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}

// 1 XE.ready()会加载Cesium.js等其他资源，注意ready()返回一个Promise对象。
XE.ready().then(startup);    
