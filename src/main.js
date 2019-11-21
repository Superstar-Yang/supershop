import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index";
import Vant from 'vant'
import 'vant/lib/index.css'
import toast from './components/common/toast/index'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast);
Vue.use(Vant);
//图片懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
});
new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
