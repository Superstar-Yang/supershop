import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const proFile = () => import('views/profile/proFile')
const Detail = () => import('views/detail/detail')
const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:proFile
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    // path:'/detail',
    path:'/detail/:iid',
    component:Detail
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router =  new VueRouter({
  routes,
  mode:'history'
})

export default router

