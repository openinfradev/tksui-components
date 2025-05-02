import type {ReactNode} from 'react';
import type React from 'react';
import type {OnAfterOpenCallback} from 'react-modal';

import type {TBaseProps} from '@/common/base/TBase.interface';

export const modalSize = {sm: 'small', md: 'medium', lg: 'large', xlg: 'xlarge', xxlg: 'xxlarge'} as const;
type modalSizeType = (typeof modalSize)[keyof typeof modalSize];

export interface TModalProps extends TBaseProps {
    appId?: string;
    portalId?: string;

    className?: string;
    overlayClassName?: string;
    bodyClassName?: string;

    children?: ReactNode;
    title?: string;
    header?: ReactNode;
    footer?: ReactNode;

    isOpen: boolean;
    contentLabel?: string;

    testId?: string;

    onRequestClose(event: React.MouseEvent | React.KeyboardEvent): void;

    onAfterClose?(): void;

    onAfterOpen?: OnAfterOpenCallback;

    size?: modalSizeType;

    small?: boolean;
    medium?: boolean;
    large?: boolean;
    xlarge?: boolean;
    xxlarge?: boolean;
}
