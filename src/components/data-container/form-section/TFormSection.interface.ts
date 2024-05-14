import {ReactElement, ReactNode, CSSProperties} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export type RowVerticalAlign = 'top' | 'middle';
export type LabelItemAlign = 'horizontal' | 'vertical';

export interface TFormSectionProps extends TBaseProps {
    children: ReactNode,

    column?: number,
    label?: string,
    customLabel?: ReactElement,
    information?: string,
    customInformation?: ReactElement,

    labelWidth?: string,
    noRowDivider?: boolean,

    leftAction?: ReactElement,
    rightAction?: ReactElement,

    formLabelItemAlign?: LabelItemAlign;
    formRowVerticalAlign?: RowVerticalAlign,
}


export interface TFormSectionRowProps extends TBaseProps {
    children: ReactNode,
    verticalAlign?: RowVerticalAlign,
}

export interface TFormSectionItemProps extends TBaseProps {
    children: ReactNode,

    information?: string,
    span?: number,
    required?: boolean,
    label?: string,

    contentStyle?: CSSProperties,
}
