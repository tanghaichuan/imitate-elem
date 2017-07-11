import {TOGGLE_MODAL} from './mutation-types'

export default {
	[TOGGLE_MODAL](state){
		state.showModal = !state.showModal;
	}
}