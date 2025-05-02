'use client';

import type {Theme, ToastPosition} from 'react-toastify';
import {toast, ToastContainer} from 'react-toastify';

import type {TToastProps} from '@/components';

function TToast({
    theme = 'light' as Theme,
    className = 'tks-toast-container',
    autoClose = 5000,
    toastClassName = 'tks-toast',
    position = 'top-right' as ToastPosition,
    draggable = false,
    ...restProps
}: TToastProps) {
    const props = {
        theme,
        className,
        autoClose,
        toastClassName,
        position,
        draggable,

        ...restProps,
    };

    return <ToastContainer {...props} />;
}

const notify = toast;

export {notify, toast};

export default TToast;
