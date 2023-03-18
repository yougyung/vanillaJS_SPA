import MainPage from './mainPage.js';
import DetailPage from './detailPage.js';
import WritePage from './writePage.js';

export const routeList = [
	{ path: '/', view: MainPage },
	{ path: '/post/write', view: WritePage },
	{ path: '/post/:postId', view: DetailPage },
];
//일단 postId 로 보낸다음에 없는 id인경우 index로 다시 보내기
