import Component from '../core/component.js';
import image from '../assets/pencil.png';

export default class WriteButton extends Component {
	constructor() {
		super();
	}

	setDefaultProps() {
		this.props = {
			content: 'innertext',
			onClick: () => {},
		};
	}

	template(props) {
		if (props) this.setProps(props);
		const { text } = this.props;
		return `
			<div id='button' class="w-full h-14 bg-gray-800 text-white rounded-lg text-md flex justify-center items-center mb-5">
				<img src=${image} class="w-[18px] m-3"/>
				<div class="font-medium text-md">${text}</div>
			</div>
	  `;
	}

	setEvent(props) {
		const { onClick } = props;
		document.getElementById(`button`).addEventListener('click', () => onClick());
	}
}
