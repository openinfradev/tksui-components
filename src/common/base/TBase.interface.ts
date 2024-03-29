import {CSSProperties} from 'react';

export interface TBaseProps {
    className?: string,
    style?: CSSProperties,
    id?: string,
}


export interface TBaseTooltipProps {
    tooltipId?: string,
    tooltipContent?: string,
    tooltipPlace?: 'top' | 'right' | 'bottom' | 'left',
    tooltipHidden?: boolean,
    tooltipTitle?: string,
    tooltipHtml?: string,
}
