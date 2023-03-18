import Component from '../core/component.js';
import { navigate } from '../core/router.js';

export default class Post extends Component {
	constructor() {
		super();
	}

	template(props) {
		if (props) this.setProps(props);
		const { content, image, postId, title } = this.props;
		return `
   <div id="post-${postId}" class="flex rounded-2xl border cursor-pointer overflow-hidden">
   		 <img src="${image}" class="w-[100px] h-[100px]"/>
     	 <div class="flex flex-col justify-evenly p-5">
					<div class="text-lg font-bold">${title}</div>
					<div class="text-sm text-gray-600">${content}</div>
    	  </div>
    </div>
    `;
	}

	setEvent(props) {
		document
			.getElementById(`post-${props.postId}`)
			.addEventListener('click', () => navigate(props, null, `/post/${props.postId}`));
	}
}
