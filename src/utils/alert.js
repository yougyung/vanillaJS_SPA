import Swal from 'sweetalert2';
/**
 * message에 대한 사용자의 선택값을 반환
 * @param {string} messsage - alert message
 * @returns {boolean}  - user's input value
 */
export const alert = async (messsage) => {
	const {isConfirmed} = await Swal.fire({
		title: `${messsage}`,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#CF5E53',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Delete',
	});
	return isConfirmed;
};
