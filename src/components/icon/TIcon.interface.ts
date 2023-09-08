import {KeyboardEvent, MouseEvent} from 'react';
import {TBaseProps, TBaseTooltipProps} from '@/common/base/TBase.interface';

const iconType = ['outlined', 'filled'] as const;
export type TIconSource = 'original' | 'material';
export type TIconType = typeof iconType[number];
const iconSize = ['small', 'medium', 'large', 'xlarge'] as const;
export type TIconSize = typeof iconSize[number];

export interface TIconProps extends TBaseProps, TBaseTooltipProps {
    children: string,
    clickable?: boolean,
    disabled?: boolean,

    type?: TIconType,
    size?: TIconSize,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    xlarge?: boolean,

    color?: string,

    onClick?: (event?: MouseEvent) => void,
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void,
    onKeyDownEnter?: (event: KeyboardEvent<HTMLInputElement>) => void,
    onKeyDownSpace?: (event: KeyboardEvent<HTMLInputElement>) => void,
}
