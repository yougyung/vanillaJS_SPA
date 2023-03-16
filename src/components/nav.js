import Component from '../core/component.js';
import { navigate } from '../core/router.js';
export default class Nav extends Component {
	constructor() {
		super();
	}

	template() {
		return `
			<div id='nav' class="fixed top-0 p-5 flex items-center justify-end bg-white h-14 w-full max-w-[640px]">
				<div class="font-bold text-xl">HPNY 2023</div>
			</div>
	  `;
	}

	setEvent() {
		document.getElementById('nav').addEventListener('click', () => navigate(null, null, '/'));
	}
}
