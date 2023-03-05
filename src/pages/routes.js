import mainPage from './mainPage.js';
import detailPage from './detailPage.js';
import WritePage from './writePage.js';

export const routeList = [
	{ path: '/', view: mainPage },
	{ path: '/new', view: WritePage },
	{ path: '/detail', view: detailPage },
];
