export default class Component {
	props;

	state;

	constructor(props) {
		this.props = props;
		this.initState();
		this.setDefaultProps();
	}

	initState() {
		this.state = {};
	}

	setState(newState) {
		this.state = {
			...this.state,
			...newState,
		};
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

	setEvent() {}

	render(props) {
		const html = this.template(props);
		return html;
	}

	template() {
		return (props) => {
			this.setProps(props);
			return `<div></div>`;
		};
	}
}
