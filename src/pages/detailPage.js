import Component from '../core/component.js';
import Nav from '../components/nav.js';

import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';

export default class detailPage extends Component {
	constructor() {
		super();
	}

	template() {
		const nav = new Nav();

		return `
			${nav.template()}
			<div class="flex flex-col border-b border-gray-300">
			<img src="image" class="h-full w-full object-cover aspect-[3/2]" />
			<div class="p-4 w-full">
				<div class="text-2xl font-semibold my-2">post.title</div>
				<div class="text-sm text-gray-600"">2020.02.13</div>
				<div class="text-md my-2">post.content</div>
			</div>
			<div class="flex justify-end w-full p-4" >
				<div class="flex gap-4">
					<img src=${editImg}>
					<img src=${deleteImg}>
				</div>
			</div>
		  </div>
	  `;
	}
}
