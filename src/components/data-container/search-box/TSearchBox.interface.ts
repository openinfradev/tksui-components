import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

type TFormLabel = string | ReactNode;

export interface TSearchBoxProps extends TBaseProps {
    children: ReactNode,

    column?: number,
    labelWidth?: string,

    expandableZone?: ReactNode,

    onSearch?: () => void,
    onReset?: () => void,
}

export interface TSearchBoxRowProps extends TBaseProps {
    children: ReactNode,
}

export interface TSearchBoxItemProps extends TBaseProps {
    children: ReactNode,

    span?: number,
    required?: boolean,
    label?: TFormLabel,
}

export interface TSearchBoxContextInterface {
    column: number
    labelWidth: string,
}
