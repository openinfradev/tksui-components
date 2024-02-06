import {KeyboardEvent, MouseEvent, ReactNode} from 'react';
import {TBaseProps, TBaseTooltipProps} from '@/common/base/TBase.interface';

export const buttonSize = {xsmall: 'xsmall', small: 'small', medium: 'medium', large: 'large', xlarge: 'xlarge'};
export const buttonVariant = {
    primary: 'primary', main: 'main', ghost: 'ghost', rounded: 'rounded',
};

type ButtonSize = typeof buttonSize[keyof typeof buttonSize];
export type ButtonVariant = typeof buttonVariant[keyof typeof buttonVariant];

export interface TButtonProps extends TBaseProps, TBaseTooltipProps {
    children: ReactNode,
    icon?: string,

    // size
    size?: ButtonSize,
    xsmall?: boolean,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    xlarge?: boolean,

    // variant
    variant?: ButtonVariant,
    primary?: boolean,
    main?: boolean,
    // outlined?: boolean,
    // plain?: boolean,
    ghost?: boolean,
    rounded?: boolean,

    width?: string,

    disabled?: boolean,
    loading?: boolean,

    onClick?: (event?: MouseEvent | KeyboardEvent) => void,
}


export interface TButtonRef {
    focus(): void,
    click(): void,
}
