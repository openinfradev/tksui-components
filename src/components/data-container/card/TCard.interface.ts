import {ReactNode} from 'react';
import {TBaseProps, TBaseTooltipProps} from '@/common/base/TBase.interface';
import {TIconSize, TIconType} from '~/icon';

export interface TCardProps extends TBaseProps, TBaseTooltipProps {
    children?: ReactNode,
    width?: string,
    height?: string,
    dashed?: boolean,
    center?: boolean,

    icon?: string
    iconType?: TIconType,
    iconSize?: TIconSize,
    iconColor?: string,

    selected?: boolean,
    clickable?: boolean,

    onClick?: () => void,
}

export interface TCardHeaderProps extends TBaseProps {
    title?: string,
    subTitle?: string,

    icon?: string
    iconType?: TIconType,
    iconSize?: TIconSize,
    iconColor?: string,
}

export interface TCardContentProps extends TBaseProps {
    children: ReactNode,
}
