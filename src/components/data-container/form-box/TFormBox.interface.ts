import {CSSProperties, ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

type TFormLabel = string | ReactNode;

export interface TFormBoxProps extends TBaseProps {
    children: ReactNode,

    leftAction?: ReactNode,
    rightAction?: ReactNode,
    middleAction?: ReactNode,
}


export interface  TFormSectionProps extends TBaseProps {
    children: ReactNode,

    column?: number,
    required?: boolean,
    label?: TFormLabel,
    information?: string,
    gridType?: boolean,
    gridTypeRowHeight?: string,
    gridTypeLabelWidth?: string,

    leftAction?: ReactNode,
    rightAction?: ReactNode,
}


export interface TFormRowProps extends TBaseProps {
    children: ReactNode,
}

export interface TFormItemProps extends TBaseProps {
    children: ReactNode,

    span?: number,
    required?: boolean,
    label?: TFormLabel,

    labelMarginBottom?: string,
    contentStyle?: CSSProperties,
}
