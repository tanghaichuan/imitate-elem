import {
	TOGGLE_MODAL,
	TOGGLE_SHOPDETAILS
} from './mutation-types'
export default {
	[TOGGLE_MODAL](state) {
		state.showModal = !state.showModal;
	},
	[TOGGLE_SHOPDETAILS](state) {
		state.toggleShopDetails = !state.toggleShopDetails
	}
}