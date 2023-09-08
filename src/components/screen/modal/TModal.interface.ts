import React, {ReactNode} from 'react';
import {OnAfterOpenCallback} from 'react-modal';
import {TBaseProps} from '@/common/base/TBase.interface';

export const modalSize = {sm: 'small', md: 'medium', lg: 'large', xlg: 'xlarge', xxlg: 'xxlarge'} as const;
type modalSize = typeof modalSize[keyof typeof modalSize];

export interface TModalProps extends TBaseProps {
    containerId?: string,
    className?: string,
    overlayClassName?: string,
    bodyClassName?: string,

    children?: ReactNode,
    title?: string,
    header?: ReactNode,
    footer?: ReactNode,

    isOpen: boolean,
    contentLabel?: string,

    testId?: string,

    onRequestClose(event: React.MouseEvent | React.KeyboardEvent): void;

    onAfterClose?(): void;

    onAfterOpen?: OnAfterOpenCallback,

    size?: modalSize,

    small?: boolean,
    medium?: boolean,
    large?: boolean,
    xlarge?: boolean,
    xxlarge?: boolean,
}
