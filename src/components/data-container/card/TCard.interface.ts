import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TCardProps extends TBaseProps {
    children: ReactNode,
    width?: string,
    height?: string,

    selected?: boolean,
    clickable?: boolean,

    onClick?: () => void,
}

export interface TCardHeaderProps extends TBaseProps {
    title?: string,
    subTitle?: string,
}

export interface TCardContentProps extends TBaseProps {
    children: ReactNode,
}
