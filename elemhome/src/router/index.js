import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/page/Home'

const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const contain = r => require.ensure([], () => r(require('@/page/contain')), 'contain');
const navmenu = r => require.ensure([], () => r(require('@/page/navmenu')), 'navmenu');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');

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
      meta: {
          requireAuth: true
      },
    	children: [{
    	  path: '',
			  component: contain,
        meta: {
          requireAuth: true
        },
    	},
      {
        path: '/addShop',
        component: addShop,
        meta: {
          nav:['添加数据', '添加商铺'],
          requireAuth: true
        }
      },
      {
        path: '/addGoods',
        component: addGoods,
        meta: {
          nav:['添加数据', '添加商品'],
          requireAuth: true
        }
      },
      {
        path: '/userList',
        component: userList,
        meta: {
          nav:['数据管理', '用户列表'],
          requireAuth: true
        }
      },
      {
        path: '/shopList',
        component: shopList,
        meta: {
          nav:['数据管理', '商家列表'],
          requireAuth: true
        }
      },
      {
        path: '/foodList',
        component: foodList,
        meta: {
          nav:['数据管理', '食品列表'],
          requireAuth: true
        }
      },
      {
        path: '/orderList',
        component: orderList,
        meta: {
          nav:['数据管理', '订单列表'],
          requireAuth: true
        }
      },
      {
        path: '/adminList',
        component: adminList,
        meta: {
          nav:['数据管理', '管理员列表'],
          requireAuth: true
        }
      },
      {
        path: '/visitor',
        component: visitor,
        meta: {
          nav:['图表', '用户分布'],
          requireAuth: true
        }
      },
      {
        path: '/adminSet',
        component: adminSet,
        meta: {
          nav:['设置', '管理员设置'],
          requireAuth: true
        }
      }
      ]
    }
  ]
})
