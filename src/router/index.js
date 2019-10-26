//1.插件
import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const proFile = () => import('views/profile/proFile')
//2.安装插件
Vue.use('VueRouter')
//创建实例
const routes =[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:proFile
  }
]
const router = new VueRouter({
  routes:router,
  mode:'history'
})
//3.导出router
export default router
