import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld')
const Login = () => import('@/components/login')//登陆
const Home = () => import('@/components/home')//首页

Vue.use(Router)

export default new Router({
  routes: [
//  {
//  	path: '/',
//			redirect: '/home'
//  },
    {
      path: '/login',
      component: Login
    },
    {
    	path: '/home',
			component: Home
    }
  ]
})
