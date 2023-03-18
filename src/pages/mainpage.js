import Component from '../core/component.js';
import Nav from '../components/nav.js';
import Button from '../components/button.js';
import Post from '../components/post.js';
import { postAPI } from '../apis/post.js';
import { navigate } from '../core/router.js';

export default class MainPage extends Component {
	constructor() {
		super();
	}

	initState() {
		this.state = {
			postList: [],
		};
	}

	loadData = async () => {
		try {
			const data = await postAPI.getPosts();
			if (JSON.stringify(this.state.postList) !== JSON.stringify(data)) {
				this.setState({ postList: data });
			}
		} catch (error) {
			console.log(error);
		}
	};

	template() {
		const nav = new Nav();
		const post = new Post();
		const button = new Button();
		const { postList } = this.state;
		this.loadData();
		return `
		${nav.template()}
		${button.template({ text: 'WRITE POST' })}
		${postList.map((item) => post.template(item)).join('<br/>')}
	  `;
	}

	setEvent() {
		const nav = new Nav();
		const post = new Post();
		const button = new Button();
		const { postList } = this.state;
		nav.setEvent();
		button.setEvent({ onClick: () => navigate(null, null, '/post/write') });
		postList.map((item) => post.setEvent(item));
	}
}
