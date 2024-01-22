import {KeyboardEvent, MouseEvent} from 'react';
import {TBaseProps, TBaseTooltipProps} from '@/common/base/TBase.interface';

export type TIconSource = 'original' | 'material';
export const iconSize = {xsmall: 'xsmall', small: 'small', medium: 'medium', large: 'large', xlarge: 'xlarge'};
export type TIconSize = typeof iconSize[keyof typeof iconSize];

export interface TIconProps extends TBaseProps, TBaseTooltipProps {
    children: string,
    clickable?: boolean,
    disabled?: boolean,

    size?: TIconSize,
    xsmall?: boolean,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    xlarge?: boolean,

    fill?: boolean,

    color?: string,

    onClick?: (event?: MouseEvent<HTMLSpanElement>) => void,
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void,
    onKeyDownEnter?: (event: KeyboardEvent<HTMLInputElement>) => void,
    onKeyDownSpace?: (event: KeyboardEvent<HTMLInputElement>) => void,
}
