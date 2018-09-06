// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'//引入axios
import ElementUI from 'element-ui';//引入饿了么UI
import 'element-ui/lib/theme-chalk/index.css';//引入饿了么UI样式表

Vue.prototype.$ajax = axios   //axios不是vue的插件,不可以用use
Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
