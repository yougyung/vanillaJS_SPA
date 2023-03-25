import axios from "axios";

const BASE_URL = process.env.BASE_URL;
const IMAGE_URL = process.env.IMAGE_URL;
const IMAGE_ACCESS_KEY = process.env.IMAGE_ACCESS_KEY;

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

export const imageInstance = axios.create({
	baseURL: IMAGE_URL,
	params: {
		client_id: IMAGE_ACCESS_KEY,
	  },
});
