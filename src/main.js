import Vue from 'vue'

import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index.js'

Vue.use(ELEMENT)

Vue.config.productionTip = false

// main.js指责:1.导入项目依赖资源(包 css...)
// 2.初始化根实例

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
