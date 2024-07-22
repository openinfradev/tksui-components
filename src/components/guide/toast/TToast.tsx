import 'react-toastify/dist/ReactToastify.css';
import {Theme, toast, ToastContainer} from 'react-toastify';
import {ToastPosition} from 'react-toastify/dist/types';
import {TToastProps} from './TToast.interface';

function TToast({
    theme = 'light' as Theme,
    className = 'tks-toast-container',
    autoClose = 5000,
    toastClassName = 'tks-toast',
    bodyClassName = 'tks-toast__body',
    progressClassName = 'tks-toast__progress',
    position = 'top-right' as ToastPosition,
    draggable = false,
    ...restProps
}: TToastProps) {

    const props = {
        theme,
        className,
        autoClose,
        toastClassName,
        bodyClassName,
        progressClassName,
        position,
        draggable,
        ...restProps,
    };

    return (
        <ToastContainer {...props} />
    );
}

export const notify = toast;
export default TToast;
