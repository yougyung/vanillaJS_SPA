import { imageInstance } from '../apis/axios.js';

export const imageAPI = {
	async getImage() {
	  const { data } = await imageInstance.get('/photos/random');
	  return data;
	}
};