import type {CSSProperties, ReactElement, ReactNode} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

export type LabelVerticalAlign = 'top' | 'middle';
export type LabelItemLayout = 'horizontal' | 'vertical';

export interface TFormColumnProps extends TBaseProps {
    column?: number;
    labelWidth?: string;
    labelVerticalAlign?: LabelVerticalAlign;

    key?: string;
    content: ReactNode;

    information?: string;
    span?: number;
    required?: boolean;
    label?: string;

    contentStyle?: CSSProperties;
}

export interface TFormRowProps extends TBaseProps {
    column?: number;
    columns: TFormColumnProps[];

    labelWidth?: string;
    labelVerticalAlign?: LabelVerticalAlign;
    key?: string | number;
}

export interface TFormProps extends TBaseProps {
    rows: TFormRowProps[];

    column?: number;
    label?: string;
    customLabel?: ReactElement;
    information?: string;
    customInformation?: ReactElement;

    labelWidth?: string;
    noRowDivider?: boolean;

    leftAction?: ReactElement;
    rightAction?: ReactElement;

    labelItemLayout?: LabelItemLayout;
    labelVerticalAlign?: LabelVerticalAlign;
}
