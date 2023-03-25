import Component from '../core/component.js';
import Nav from '../components/nav.js';
import { navigate, getUrlParam } from '../core/router.js';
import { postAPI } from '../apis/post.js';
import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';
import { alert } from '../utils/alert.js';

export default class detailPage extends Component {
	constructor() {
		super();
	}

	initState() {
		this.state = {
			post: {},
		};
	}

	loadData = async () => {
		try {
			const postId = getUrlParam();
			if (this.state.post.postId !== postId) {
				const { data } = await postAPI.getPost(postId);
				this.setState({ post: data.post });
			}
		} catch (error) {
			navigate(null, null, '/');
		}
	};

	updatePost() {
		navigate(this.state.post, null, '/post/write');
	}

	deletePost = async () => {
		try {
			const result = alert('게시물을 삭제할까요?',true);
			if (await result) {
				await postAPI.deletePost(this.state.post.postId);
				navigate(null, null, '/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	template() {
		const nav = new Nav();
		this.loadData();
		const { title, createdAt, content, image } = this.state.post;
		return `
			${nav.template()}
			<div class="flex flex-col border-b border-gray-300">
			<img src=${image} class="h-full w-full object-cover aspect-[3/2]" />
			<div class="p-4 w-full">
				<div class="text-2xl font-semibold my-2">${title}</div>
				<div class="text-sm text-gray-600"">${createdAt}</div>
				<div class="text-md my-2">${content}</div>
			</div>
			<div class="flex justify-end w-full p-4" >
				<div class="flex gap-4">
					<img id='editButton' src=${editImg}>
					<img id='deleteButton' src=${deleteImg}>
				</div>
			</div>
		  </div>
	  `;
	}

	setEvent() {
		const nav = new Nav();
		nav.setEvent();
		document.getElementById('editButton').addEventListener('click', () => this.updatePost());
		document.getElementById('deleteButton').addEventListener('click', () => this.deletePost());
	}
}
