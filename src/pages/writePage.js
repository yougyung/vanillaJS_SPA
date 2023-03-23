import Component from '../core/component.js';
import Nav from '../components/nav.js';
import inputImage from '../assets/input-image.png';
import Button from '../components/button.js';
import { postAPI } from '../apis/post.js';
import { navigate } from '../core/router.js';

export default class WritePage extends Component {
	constructor() {
		super();
	}

	initState() {
		console.log('process.env.BASE_URL ' + process.env.BASE_URL);
		this.state = {
			post: { content: '' },
		};
	}

	loadData = async () => {
		try {
			const data = await postAPI.getPosts();
			if (JSON.stringify(this.state.postList) !== JSON.stringify(data)) {
				this.setState({ postList: data });
			}
			if (window.history.state && JSON.stringify(window.history.state) !== JSON.stringify(this.state.post)) {
				this.setState({ post: window.history.state });
			}
		} catch (error) {
			console.log(error);
		}
	};
	createPost = async () => {
		const $title = document.getElementById('title');
		const $content = document.getElementById('content');
		this.setState({
			post: {
				title: $title.value,
				content: $content.value,
				image: 'https://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg?w=1060',
			},
		});
		const data = await postAPI.createPost(this.state.post);
		const date = new Date();
		if (data.code === 201) navigate({ ...data.data, createdAt: date.toLocaleString() }, null, '/detail');
	};
	updatePost = async () => {
		const $title = document.getElementById('title');
		const $content = document.getElementById('content');
		this.setState({
			post: {
				title: $title.value,
				content: $content.value,
				postId: this.state.post.postId,
			},
		});

		const data = await postAPI.updatePost(this.state.post.postId, this.state.post);
		if (data.code === 200) navigate(null, null, '/');
	};

	template() {
		const nav = new Nav();
		const button = new Button();
		this.loadData();
		const { title, content, image } = this.state.post;
		return `
			${nav.template()}
    <form id="w-full post-form" class="flex flex-col gap-4">
        <div class="aspect-[3/2] rounded-md border border-gray-300 flex justify-center items-center">
          <button type="button">
            <img src="${image ? image : inputImage}" class="aspect-[3/2]">
          </button>
        </div>
        <div class="min-h-[260px] text-gray-700 flex flex-col justify-start items-start gap-3 p-5">
        <div class="text-2xl font-bold w-full">
            <div>제목</div>
              <input
			  	id ="title"
                type="text"
                class="text-gray-600 text-xl w-full focus:outline-none"
				value=${image ? title : ''}
              >
          </div>
          <hr class="w-full" />
          <div class="text-2xl font-bold w-full">
            <div>내용</div>
            <textarea
			id ="content"
            class="w-full text-lg text-gray-500 resize-none h-[80px] focus:outline-none">${content}</textarea>
          </div>
        </div>
		${button.template({ text: image ? '수정하기' : '등록하기' })}
    </form>
	  `;
	}

	setEvent() {
		const nav = new Nav();
		const button = new Button();
		nav.setEvent();
		button.setEvent({ onClick: () => (this.state.post.image ? this.updatePost() : this.createPost()) });
	}
}
