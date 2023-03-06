import Component from '../core/component.js';

export default class Nav extends Component {
	constructor() {
		super();
	}

	template() {
		return `
			<div class="fixed top-0 p-5 flex items-center justify-end bg-white h-14 w-full max-w-[640px]">
				<div class="font-bold text-xl">HPNY 2023</div>
			</div>
	  `;
	}
}
// <a href="/" data-link>main</a>
// <a href="/detail" data-link>detail</a>
// <a href="/new" data-link>new</a>
