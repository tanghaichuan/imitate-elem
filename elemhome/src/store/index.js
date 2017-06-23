import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	adminInfo: {
		username:''
	}
}

const mutations = {
	saveAdminInfo(state, info) {
		state.adminInfo.username = info;
	}
}

const actions = {
	// 封装异步操作
	// 这里用了sessionStorage来存，其实也没必要用到vuex
	getLoginData({commit}) {
		let info = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : '';
		commit('saveAdminInfo', info);
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
});