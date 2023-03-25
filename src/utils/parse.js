/**
 * @brief HTML문자열을 HTML요소로 변환
 * @param {string} htmlString - HTML string
 * @returns {HTMLElement} - HTML Element
 */
export function parseHtmlStringToElement(htmlString) {
	const domParser = new DOMParser();
	const type = 'text/html';
	const $page = domParser.parseFromString(htmlString, type).body;
	return $page;
}
