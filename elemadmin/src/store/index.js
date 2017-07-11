import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
Vue.use(Vuex)

const state = {
	showModal: false					// 切换商铺页店家公告蒙版
}

export default new Vuex.Store({
	state,
	actions,
	mutations
});