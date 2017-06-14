
//export const hasTouch = 'ontouchstart' in window;

 export class addEvent {

 	constructor() {
		
	}

	touchstart(el,fn) {
		el.addEventListener('touchstart', fn);
	}

	touchmove(el,fn) {
		el.addEventListener('touchmove', fn);
	}

	touchend(el,fn) {
		el.addEventListener('touchend', fn);
	}

 }