import Component from '../core/component.js';
import Nav from '../components/nav/nav.js';

export default class MainPage extends Component {
	constructor() {
		super();
	}

	template() {
		const nav = new Nav();
		return ` 
			${nav.render()}
			 <div>mainpage</div>
	  `;
	}
}
