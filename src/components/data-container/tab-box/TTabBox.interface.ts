import {ReactElement} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export type TTabBoxValue = string | number;

export interface TTabBoxProps extends TBaseProps {
    children: ReactElement[];
    value: TTabBoxValue,
    onChange: (value: TTabBoxValue) => void,
}

export interface TTabItemProps {
    index?: TTabBoxValue,
    value?: TTabBoxValue,
    label?: string | ReactElement,
    content?: ReactElement,
}

