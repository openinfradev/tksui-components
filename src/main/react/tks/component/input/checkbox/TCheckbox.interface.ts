import {ReactNode} from 'react';
import {TValidatorProps} from '~/tks/component/common/validator/TValidator.interface';

export type TCheckboxValue = boolean | string;

export interface TCheckboxProps extends TValidatorProps {
    className?: string,
    style?: { [key: string]: string },
    width?: string,
    
    children?: ReactNode,
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
