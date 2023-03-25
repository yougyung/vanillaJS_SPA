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
	
	/**  
	* @brief state의 변경을 처리하고 rerendering을 발생시킴
	* @param { object } newState - 변경될 state
	*/
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

	/** 
	* @brief rendering
	* @details Component를 <div id='app'></div>의 자식요소로 등록
	*/
	#render() {
		const $app = document.querySelector('#app');
		const $fragment = document.createDocumentFragment();
		$fragment.append(parseHtmlStringToElement(this.template()));
		$app.replaceChildren($fragment);
		this.setEvent();
	}
}
