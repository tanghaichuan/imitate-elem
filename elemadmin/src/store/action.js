import {
	TOGGLE_MODAL
} from './mutation-types.js'

// action处理异步操作 提交commit
export default{
	toggleModal({ commit, state }){
		commit(TOGGLE_MODAL);
	}
}