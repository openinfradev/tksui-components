import {TBaseProps} from '~/tks/component/common/base/TBase.interface';

export interface TProgressProps extends TBaseProps {
    isOpen?: boolean,
    onRequestClose?: () => void,
    message?: string,
    containerId?: string,
}

