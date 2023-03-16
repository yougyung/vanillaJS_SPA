import MainPage from './mainPage.js';
import DetailPage from './detailPage.js';
import WritePage from './writePage.js';

export const routeList = [
	{ path: '/', view: MainPage },
	{ path: '/new', view: WritePage },
	{ path: '/detail', view: DetailPage },
];
