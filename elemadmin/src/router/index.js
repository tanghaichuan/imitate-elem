import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	    {
	      path: '/',
	      name: 'shop',
	      component: shop
	    }
	]
})
