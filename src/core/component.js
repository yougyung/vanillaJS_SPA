import { parseHtmlStringToElement } from '../utils/parse.js';

export default class Component {
	props;
	state;
	constructor(props) {
		this.props = props;
		this.initState();
		this.setDefaultProps();
	}

	initState() {}

	setState(newState) {
		this.state = {
			...this.state,
			...newState,
		};
		this.render();
	}

	setDefaultProps() {
		this.props = {};
	}

	setProps(newProps) {
		this.props = {
			...this.props,
			...newProps,
		};
	}

	render() {
		const $app = document.querySelector('#app');
		const $page = parseHtmlStringToElement(this.template(), true);
		$app.replaceChildren($page);
	}

	template() {}

	setEvent() {}
}
