import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入字体图标
import './assets/fonts/iconfont.css'
// 引入初始样式
import './assets/css/base.less'

//引入element-ui
import './plugins/element.js'

// 引入axios请求
import './api' 

import TreeTable from 'vue-table-with-tree-grid'

Vue.config.productionTip = false

Vue.component('tree-table',TreeTable)

new Vue({
  el: '#app',
  // 6. 挂载路由
  router,
  render: h => h(App)
})
