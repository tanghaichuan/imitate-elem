

import {addEvent} from '../utils/addEvent'

//触控事件监听
let bindEvent=new addEvent;

class AiScoll {
	  
}

/*export default {

	directives: {
		slide: {
			bind(el,binding,vnode) {
				let start={
					x:0,
					y:0
				}	
				let move = {
					posX:0,
					posX:0
				}
				bindEvent.touchstart(el, event => {
					console.log('touchstart');
					start.x = event.touches[0].clientX;
					start.y = event.touches[0].clientY;
				});

				bindEvent.touchmove(el, event => {
					//console.log('touchmove');

					let touchY = event.touches[0].clientY;
					let touchX = event.touches[0].clientX;

					move = {
						posX:touchX-start.x,
						posY:touchY-start.y
					}

					console.log(move);
				});

				bindEvent.touchend(el, event => {
					console.log('touchend');
				});
			},
			update(newValue,oldValue) {
				
			},
			unbind() {

			}
		}
	},
}
*/