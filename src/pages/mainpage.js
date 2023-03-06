import Component from '../core/component.js';
import Nav from '../components/nav.js';
import WriteButton from '../components/writeButton.js';
import Post from '../components/post.js';
import { postAPI } from '../apis/post.js';
import parseElementFromString from '../utils/parse.js';
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

	getPosts = async () => {
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
		const writeButton = new WriteButton();
		const { postList } = this.state;
		this.getPosts();
		return `
		${nav.template()}
		${writeButton.template()}
		${postList.map((item) => post.template(item))}
		${postList.map((item) => post.setEvent(item))}
	  `;
	}
}
