import {CSSProperties} from 'react';
import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TCheckboxValue} from '../checkbox/TCheckbox.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

export type TCheckboxGroupValue = TCheckboxValue[];

export interface TCheckboxGroupItem { [key: string]: any }

export interface TCheckboxGroupProps extends TBaseProps, TValidatorProps {

    value: TCheckboxGroupValue,
    items: TCheckboxGroupItem[],
    disabled?: boolean,

    labelId?: string,

    textKey?: string,
    valueKey?: string,

    labelTemplate?: (item: TCheckboxGroupItem) => string,
    
    onChange(value: TCheckboxGroupValue): void,
}


export interface TCheckboxGroupRef {
    validate(): true | string,
}
