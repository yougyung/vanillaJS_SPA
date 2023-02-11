import mainpage from './mainpage.js';
import subpage from './subpage.js';

export const routeList = [
	{ path: '/', view: mainpage },
	{ path: '/main', view: mainpage },
	{ path: '/sub', view: subpage },
];
