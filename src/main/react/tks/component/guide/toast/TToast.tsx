import 'react-toastify/dist/ReactToastify.css';
import {Theme, toast, ToastContainer} from 'react-toastify';
import {ToastPosition} from 'react-toastify/dist/types';
import {TToastProps} from '~/tks/component/guide/toast/TToast.interface';

function TToast(props: TToastProps) {
    return (
        <ToastContainer {...props} />
    );
}

TToast.defaultProps = {
    theme: 'light' as Theme,
    className: 'tks-toast-container',
    autoClose: 5000,
    toastClassName: 'tks-toast',
    bodyClassName: 'tks-toast__body',
    progressClassName: 'tks-toast__progress',
    position: 'top-right' as ToastPosition,
    draggable: false,
};


export const notify = toast;
export default TToast;
