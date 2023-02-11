import Component from '../core/component.js';
import Nav from '../components/nav/nav.js';

export default class SubPage extends Component {
	constructor() {
		super();
	}

	template() {
		const nav = new Nav();

		return `
			${nav.render()}
			<div>subpage</div>
	  `;
	}
}
