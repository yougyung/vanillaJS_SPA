import Component from '../core/component.js';
import Nav from '../components/nav.js';
import inputImage from '../assets/input-image.png';

export default class WritePage extends Component {
	constructor() {
		super();
	}

	template() {
		const nav = new Nav();
		return `
			${nav.template()}
    <form id="w-full post-form" class="flex flex-col gap-4">
        <div class="aspect-[3/1] rounded-md border border-gray-300 flex justify-center items-center">
          <button type="button">
            <img src="${inputImage}">
          </button>
        </div>
        <div class="min-h-[300px] text-gray-700 flex flex-col justify-start items-start gap-3 p-5">
        <div class="text-2xl font-bold w-full">
            <div>제목</div>
              <input
                type="text"
                class="text-gray-600 text-xl w-full focus:outline-none"
              />
          </div>
          <hr class="w-full" />
          <div class="text-2xl font-bold w-full">
            <div>내용</div>
            <textarea
            class="w-full text-lg text-gray-500 resize-none h-[120px] focus:outline-none"></textarea>
          </div>
        </div>
        <div class=" w-full h-14 bg-gray-800 text-white rounded-lg text-md flex justify-center items-center mb-5">
          <div class="font-medium text-md">등록하기</div>
        </div>
    </form>
	  `;
	}
}
