import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/page/Home'

const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const login = r => require.ensure([], () => r(require('@/page/login')), 'login');

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	component: login
    },
    {
    	path: '/home',
    	component: home,
    	name: '',
    	children: [{
    	  path: '',
			  component: home
    	}]
    }
  ]
})
