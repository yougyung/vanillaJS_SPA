import Swal from 'sweetalert2';
/**
 * @brief message에 대한 사용자의 선택값을 반환
 * @param {string} messsage - 안내 문구
 * @param {boolean} option - 사용자의 선택 유무
 * @returns {boolean} - 사용자의 선택 값
 */
export const alert = async (messsage, option) => {
	const {isConfirmed} = await Swal.fire({
		title: `${messsage}`,
		icon: 'warning',
		showCancelButton: option,
		confirmButtonColor: '#CF5E53',
		cancelButtonColor: '#d33',
		confirmButtonText: option ? 'Delete' : 'Confirm',
	});
	return isConfirmed;
};
