import {KeyboardEvent, MouseEvent} from 'react';
import {TBaseProps, TBaseTooltipProps} from '@/common/base/TBase.interface';

export const iconButtonOutline = ['flat', 'elevation', 'none'] as const;
type iconButtonOutline = typeof iconButtonOutline[number];

export const iconButtonShape = ['rectangle', 'circle'] as const;
type iconButtonShape = typeof iconButtonShape[number];


export const iconButtonSize = {xsmall: 'xsmall', small: 'small', medium: 'medium', large: 'large'};
type TIconButtonSize = typeof iconButtonSize[keyof typeof iconButtonSize];

export interface TIconButtonProps extends TBaseProps, TBaseTooltipProps {
    children: string,
    
    shape?: iconButtonShape,
    outline?: iconButtonOutline,

    outlined?: boolean,
    disabled?: boolean,


    onClick?: (event?: MouseEvent | KeyboardEvent) => void | Promise<void>,

    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    color?: string,

    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    size?: TIconButtonSize,

    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    xsmall?: boolean,

    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    small?: boolean,

    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    medium?: boolean,

    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    large?: boolean,

    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    xlarge?: boolean,
}


export interface TIconButtonRef {
    focus(): void,
    click(): void,
}
