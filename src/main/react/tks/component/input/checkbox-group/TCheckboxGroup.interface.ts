import {CSSProperties} from 'react';
import {TValidatorProps} from '~/tks/component/common/validator/TValidator.interface';
import {TCheckboxValue} from '~/tks/component/input/checkbox/TCheckbox.interface';

export type TCheckboxGroupValue = TCheckboxValue[];

export interface TCheckboxGroupItem { [key: string]: any }

export interface TCheckboxGroupProps extends TValidatorProps {
    className?: string,
    style?: CSSProperties,
    width?: string,
    
    value: TCheckboxGroupValue,
    items: TCheckboxGroupItem[],
    disabled?: boolean,
    
    textKey?: string,
    valueKey?: string,
    
    labelTemplate?: (item: TCheckboxGroupItem) => string,
    
    onChange(value: TCheckboxGroupValue): void,
}


export interface TCheckboxGroupRef {
    validate(): true | string,
}
