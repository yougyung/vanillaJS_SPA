import { routeList } from '../pages/routes.js';

export const router = async () => {
	const { pathname } = window.location;
	const path = routeList.find((route) => pathname === route.path);
	path ? console.log(path) : (path = routeList[0]);

	const view = new path.view();
	document.querySelector('#app').innerHTML = await view.template();
};

export const navigate = (state, title, url) => {
	window.history.pushState(state, title, url);
	router();
};

export const initialSetting = () => {
	router();
	document.addEventListener('DOMContentLoaded', () => {
		window.addEventListener('popstate', router);
	});
};
