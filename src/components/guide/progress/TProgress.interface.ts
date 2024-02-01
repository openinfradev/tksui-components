import {TBaseProps} from '@/common/base/TBase.interface';

export interface TProgressProps extends TBaseProps {
    isOpen?: boolean,
    onRequestClose?: () => void,
    message?: string,
    openMessage?: string,
    closeMessage?: string,
    containerId?: string,
}

