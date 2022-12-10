import { toast } from 'react-toastify';

const notify = (content = 'Pls login to add your cart', type = 'info') =>
    toast[type](content, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    });

export default notify;
