import {ReactElement} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TCardProps extends TBaseProps {
    children: string | ReactElement | ReactElement[],
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
    children: string | ReactElement | ReactElement[],
}
