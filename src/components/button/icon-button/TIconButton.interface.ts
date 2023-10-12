import {KeyboardEvent, MouseEvent} from 'react';
import {TBaseProps, TBaseTooltipProps} from '@/common/base/TBase.interface';

export const iconButtonSize = {xsmall: 'xsmall', small: 'small', medium: 'medium', large: 'large'};
type TIconButtonSize = typeof iconButtonSize[keyof typeof iconButtonSize];

export interface TIconButtonProps extends TBaseProps, TBaseTooltipProps {
    children: string,

    size?: TIconButtonSize,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    xlarge?: boolean,


    primary?: boolean,
    point?: boolean,
    outlined?: boolean,
    disabled?: boolean,

    color?: string,

    onClick?: (event?: MouseEvent | KeyboardEvent) => void | Promise<void>,
}


export interface TIconButtonRef {
    focus(): void,
    click(): void,
}
