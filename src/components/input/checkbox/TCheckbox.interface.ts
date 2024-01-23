import {ReactNode} from 'react';
import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

export type TCheckboxValue = boolean | string;

export interface TCheckboxProps extends TBaseProps, TValidatorProps {

    children?: ReactNode,

    /**
     * @deprecated This prop will be removed in release v1.0.0
     */
    label?: JSX.Element,
    
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
