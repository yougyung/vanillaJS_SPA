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
		this.#render();
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

	template() {}

	setEvent() {}

	#render() {
		console.log('rneder');
		const $app = document.querySelector('#app');
		const $fragment = document.createDocumentFragment();
		$fragment.append(parseHtmlStringToElement(this.template()));
		$app.replaceChildren($fragment);
		this.setEvent();
	}
}
