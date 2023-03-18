import Swal from 'sweetalert2';

export const alert = async (messsage) => {
	const result = await Swal.fire({
		title: `${messsage}`,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#CF5E53',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Delete',
	});
	return result;
};
