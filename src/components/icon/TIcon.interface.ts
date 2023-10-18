import {KeyboardEvent, MouseEvent} from 'react';
import {TBaseProps, TBaseTooltipProps} from '@/common/base/TBase.interface';

const iconType = ['outlined', 'filled'] as const;
export type TIconSource = 'original' | 'material';
export type TIconType = typeof iconType[number];
export const iconSize = {xsmall: 'xsmall', small: 'small', medium: 'medium', large: 'large', xlarge: 'xlarge'};
type TIconSize = typeof iconSize[keyof typeof iconSize];

export interface TIconProps extends TBaseProps, TBaseTooltipProps {
    children: string,
    clickable?: boolean,
    disabled?: boolean,

    type?: TIconType,
    size?: TIconSize,
    xsmall?: boolean,
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
