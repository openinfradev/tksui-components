import type {ReactNode} from 'react';

import type {TBaseProps, TBaseTooltipProps} from '@/common/base/TBase.interface';

import type {TIconSize} from '~/icon';

export interface TCardProps extends TBaseProps, TBaseTooltipProps {
    children?: ReactNode;
    width?: string;
    height?: string;
    dashed?: boolean;
    center?: boolean;

    icon?: string;
    iconFill?: boolean;
    iconSize?: TIconSize;
    iconColor?: string;

    selected?: boolean;
    clickable?: boolean;

    onClick?: () => void;
}

export interface TCardHeaderProps extends TBaseProps {
    title?: string;
    subTitle?: string;

    icon?: string;
    iconFill?: boolean;
    iconSize?: TIconSize;
    iconColor?: string;
}

export interface TCardContentProps extends TBaseProps {
    children: ReactNode;
}
