import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// main.js指责:1.导入项目依赖资源(包 css...)
// 2.初始化根实例

new Vue({
  render: h => h(App)
}).$mount('#app')
