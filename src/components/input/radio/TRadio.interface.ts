import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export type TRadioValue = boolean | string;

export interface TRadioProps extends TBaseProps {

    children?: ReactNode,
    positiveValue?: TRadioValue,

    selected?: boolean,
    disabled?: boolean,

    ripple?: boolean,

    onSelect(value: TRadioValue): void,

}
