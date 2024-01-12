import {ReactElement, ReactNode, CSSProperties} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TFormSectionProps extends TBaseProps {
    children: ReactNode,

    column?: number,
    label?: string,
    customLabel?: ReactElement,
    information?: string,
    customInformation?: ReactElement,
    labelWidth?: string,

    leftAction?: ReactElement,
    rightAction?: ReactElement,
}

export interface TFormSectionRowProps extends TBaseProps {
    children: ReactNode,
}

export interface TFormSectionItemProps extends TBaseProps {
    children: ReactNode,

    customInformation?: ReactElement,
    information?: string,
    span?: number,
    required?: boolean,
    label?: string,

    labelMarginBottom?: string,
    contentStyle?: CSSProperties,
}
