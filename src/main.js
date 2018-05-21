// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'

Vue.config.productionTip = false

// 使用插件
import vueResource from "vue-resource";
Vue.use(vueResource);


// //使用mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

// //使用 mui
import "../static/css/mui.css";
// //使用iconfont
import "../static/css/iconfont.css";

//引入公共样式
import "../static/css/basic.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
