import Vue from 'vue';
// 导入路由
import VueRouter from "vue-router";
import App from './App.vue';
import Index from './components/index.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false
let routes=[
  //重定项
  {
    path:'/',
    redirect:"/index"
  },
  {
    path:'/index',
    component:Index
  }
];

//实例化路由对象
let router=new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
