// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VCharts from 'v-charts'

Vue.use(ElementUI)
Vue.use(VCharts)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if(to.matched.some(route => route.meta.requireAuth)){
		let user = sessionStorage.getItem('username');
		if(user) {
			next();
		}else{
			ElementUI.Message({
				type: 'error',
				message: '请先登录'
			});
			next({
				path:'/'
			});
		}
	}else{
		next();
	}
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
