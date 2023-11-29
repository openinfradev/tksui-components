import {KeyboardEvent, MouseEvent, ReactNode} from 'react';
import {TBaseProps, TBaseTooltipProps} from '@/common/base/TBase.interface';

export const buttonSize = {xsmall: 'xsmall', small: 'small', medium: 'medium', large: 'large', xlarge: 'xlarge'};
type buttonSize = typeof buttonSize[keyof typeof buttonSize];

export interface TButtonProps extends TBaseProps, TBaseTooltipProps {
    children: ReactNode,
    main?: boolean,
    primary?: boolean,
    point?: boolean,

    icon?: string,

    // size
    size?: buttonSize,
    xsmall?: boolean,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    xlarge?: boolean,
    
    width?: string,

    disabled?: boolean,
    rounded?: boolean,
    loading?: boolean,

    onClick?: (event?: MouseEvent | KeyboardEvent) => void,
}


export interface TButtonRef {
    focus(): void,
    click(): void,
}
