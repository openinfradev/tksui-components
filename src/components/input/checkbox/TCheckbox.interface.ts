import {ReactElement, ReactNode} from 'react';
import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

export type TCheckboxValue = boolean | string;

export type TCheckBoxStatus = 'check' | 'uncheck' | 'indeterminate'

export interface TCheckboxProps extends TValidatorProps, TBaseProps {
    children?: ReactNode,
    label?: ReactElement,

    value?: TCheckboxValue,
    checked?: boolean,
    indeterminate?: boolean,
    positiveValue?: boolean | string
    negativeValue?: boolean | string

    disabled?: boolean,
    onChange?(value: boolean | string, positiveValue?: boolean | string): void,

}


export interface TCheckboxRef {
    focus(): void,
    validate(): true | string,
}
