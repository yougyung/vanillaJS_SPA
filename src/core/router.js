import { routeList } from '../pages/routes.js';

export const router = () => {
	let { pathname } = window.location;
	let path = routeList.find((route) => {
		return pathname.match(pathToRegex(route.path));
	});
	console.log(path);
	path ? null : (path = routeList[0]);

	const view = new path.view();
	document.querySelector('#app').innerHTML = view.template();
};

const pathToRegex = (path) => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

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
