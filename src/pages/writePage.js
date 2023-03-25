import Component from '../core/component.js';
import Nav from '../components/nav.js';
import inputImage from '../assets/input-image.png';
import Button from '../components/button.js';
import { postAPI } from '../apis/post.js';
import { imageAPI } from '../apis/image.js';
import { navigate } from '../core/router.js';
import { isValue } from '../utils/validate.js';
import { mode } from '../utils/type.js';
import { alert } from '../utils/alert.js';

export default class WritePage extends Component {
	constructor() {
		super();
	}

	initState() {
		this.state = {
			post: {},
			mode: null,
			postList: [],
		};
	}

	loadData = async () => {
		try {
			//write mode
			const data = await postAPI.getPosts();
			if (JSON.stringify(this.state.postList) !== JSON.stringify(data)) {
				this.setState({ postList: data, mode: mode.write });
				this.loadImage();
			}
			//modify mode
			if (window.history.state && JSON.stringify(window.history.state) !== JSON.stringify(this.state.post)) {
				this.setState({ post: window.history.state, mode: mode.modify });
			}
		} catch (error) {
			console.log(error);
		}
	};

	loadImage = async () => {
		const { urls } = await imageAPI.getImage();
		this.setState({
			post: {
				image: urls.full,
			},
		});
	};

	createPost = async () => {
		this.chageInputValueToState();
		const data = await postAPI.createPost(this.state.post);
		const date = new Date();
		if (data.code === 201) navigate({ ...data.data, createdAt: date.toLocaleString() }, null, '/detail');
	};

	updatePost = async () => {
		this.chageInputValueToState();
		const data = await postAPI.updatePost(this.state.post.postId, this.state.post);
		if (data.code === 200) navigate(null, null, '/');
	};

	chageInputValueToState() {
		const $title = document.getElementById('title');
		const $content = document.getElementById('content');
		this.setState({
			post: {
				...this.state.post,
				title: $title.value,
				content: $content.value,
			},
		});
	}

	validation() {
		const $title = document.getElementById('title');
		const $content = document.getElementById('content');
		const $image = this.state.post.image;
		const test = [$title.value, $content.value, $image];
		test.find((value) => {
			return !isValue(value);
		}) === undefined
			? this.state.mode
				? this.createPost()
				: this.updatePost()
			: alert('작성을 완료하지 않으셨어요', false);
	}

	template() {
		const nav = new Nav();
		const button = new Button();
		this.loadData();
		const { title, content, image } = this.state.post;
		const { mode } = this.state;
		return `
			${nav.template()}
    <form id="w-full post-form" class="flex flex-col gap-4">
        <div class="aspect-[3/2] rounded-md border border-gray-300 flex justify-center items-center">
          <button type="button">
            <img src="${image}" class="aspect-[3/2]">
          </button>
        </div>
        <div class="min-h-[260px] text-gray-700 flex flex-col justify-start items-start gap-3 p-5">
        <div class="text-2xl font-bold w-full">
            <div>제목</div>
              <input
			  	id ="title"
                type="text"
                class="text-gray-600 text-xl w-full focus:outline-none"
				value="${mode ? '' : title}"
              >
          </div>
          <hr class="w-full" />
          <div class="text-2xl font-bold w-full">
            <div>내용</div>
            <textarea
			id ="content"
            class="w-full text-lg text-gray-500 resize-none h-[80px] focus:outline-none">${
				mode ? '' : content
			}</textarea>
          </div>
        </div>
		${button.template({ text: mode ? '등록하기' : '수정하기' })}
    </form>
	  `;
	}

	setEvent() {
		const nav = new Nav();
		const button = new Button();
		nav.setEvent();
		button.setEvent({ onClick: () => this.validation() });
	}
}
