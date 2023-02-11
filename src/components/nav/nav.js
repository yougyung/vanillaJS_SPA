import Component from '../../core/component.js';

export default class Nav extends Component {
	constructor() {
		super();
	}

	template() {
		return `
	    <nav>
			<a href="/">main</a>
			<a href="/sub">sub</a>
			<a href="/main">main</a>
        </nav>
	  `;
	}
}
