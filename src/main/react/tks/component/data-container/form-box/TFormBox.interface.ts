import {CSSProperties, ReactNode} from 'react';
import {TBaseProps} from '~/tks/component/common/base/TBase.interface';

type TFormLabel = string | ReactNode;

export interface TFormBoxProps extends TBaseProps {
    children: ReactNode,

    leftAction?: ReactNode,
    rightAction?: ReactNode,
    middleAction?: ReactNode,
}


export interface TFormSectionProps extends TBaseProps {
    children: ReactNode,

    column?: number,
    label?: TFormLabel,
    information?: string,
    gridType?: boolean,
    gridTypeRowHeight?: string,
}


export interface TFormRowProps extends TBaseProps {
    children: ReactNode,
}

export interface TFormItemProps extends TBaseProps {
    children: ReactNode,

    span?: number,
    required?: boolean,
    label?: TFormLabel,

    // TODO. 디자인 수정하면서 제거
    labelMarginBottom?: string,
    contentStyle?: CSSProperties,
}
