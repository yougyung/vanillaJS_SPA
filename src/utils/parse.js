export function parseHtmlStringToElement(htmlString) {
	const domParser = new DOMParser();
	const type = 'text/html';
	const $page = domParser.parseFromString(htmlString, type).body;
	return $page;
}
//jsdoc
