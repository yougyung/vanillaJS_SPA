import Swal from 'sweetalert2';

export const deleteAlert = async (messsage) => {
	const result = await Swal.fire({
		width: 400,
		height: 260,
		showConfirmButton: false,
		cancelButtonText: '확인',
		cancelButtonColor: '#CF5E53',
		showCancelButton: true,
		timer: 3000,
		html: `${messsage}`,
	});
	return result;
};
