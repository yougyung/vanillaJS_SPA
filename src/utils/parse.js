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

/**
 * @brief 날짜의 형식 변환
 * @param {string} date - row Date
 * @returns {string} - parse Date
 */
export function parseDateStringToDate(date) {
	const year = date.substring(0, 4);
	const month = date.substring(5, 7);
	const day = date.substring(8, 10);
	return `${year}년 ${month}월 ${day}일`;
}
