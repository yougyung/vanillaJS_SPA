import { axiosInstance } from '../apis/axios.js';

export const postAPI = {
	async getPosts() {
		const { data } = await axiosInstance.get(`/posts`);
		return data.data.posts;
	},
	async getPost(id) {
		const { data } = await axiosInstance.get(`/post/${id}`);
		return data;
	},
	async createPost(post) {
		const { data } = await axiosInstance.post('/post', post);
		return data;
	},
	async updatePost(id, post) {
		const { data } = await axiosInstance.patch(`/post/${id}`, post);
		return data;
	},
	async deletePost(id) {
		const { data } = await axiosInstance.delete(`/post/${id}`);
		return data;
	},
};
