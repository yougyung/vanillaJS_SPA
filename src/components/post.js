import Component from '../core/component.js';
import { navigate } from '../core/router.js';
import { parseHtmlStringToElement } from '../utils/parse.js';

export default class Post extends Component {
	constructor() {
		super();
	}

	template(props) {
		if (props) this.setProps(props);
		const { content, createdAt, image, postId, title, ipdateAt } = this.props;
		return `
   <div id="post-${postId}" class="flex rounded-2xl border cursor-pointer overflow-hidden">
   		 <img src="${image}" class="w-[100px] h-[100px]"/>
     	 <div class="flex flex-col justify-evenly p-5 overflow-hidden">
					<div class="text-lg font-bold">${title}</div>
					<div class="text-sm text-gray-600">${content}</div>
    	  </div>
    </div>
    `;
	}

	setEvent(props) {
		const $element = parseHtmlStringToElement(this.template(props), false);
		$element.addEventListener('click', () => console.log(props.postId));
	}
}
