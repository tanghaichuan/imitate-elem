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
    	children: [{
    	  path: '',
			  component: contain
    	},
      {
        path: '/addShop',
        component: addShop,
        meta: ['添加数据', '添加商铺'],
      },
      {
        path: '/addGoods',
        component: addGoods,
        meta: ['添加数据', '添加商品'],
      },
      {
        path: '/userList',
        component: userList,
        meta: ['数据管理', '用户列表'],
      },
      {
        path: '/shopList',
        component: shopList,
        meta: ['数据管理', '商家列表'],
      },
      {
        path: '/foodList',
        component: foodList,
        meta: ['数据管理', '食品列表'],
      },
      {
        path: '/orderList',
        component: orderList,
        meta: ['数据管理', '订单列表'],
      },
      {
        path: '/adminList',
        component: adminList,
        meta: ['数据管理', '管理员列表'],
      },
      {
        path: '/visitor',
        component: visitor,
        meta: ['图表', '用户分布'],
      },
      {
        path: '/adminSet',
        component: adminSet,
        meta: ['设置', '管理员设置'],
      }
      ]
    }
  ]
})
