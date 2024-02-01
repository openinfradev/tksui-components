import {CSSProperties} from 'react';
import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TRadioValue} from '../radio/TRadio.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

export type TRadioGroupValue = TRadioValue;

export interface TRadioGroupItem { [key: string]: any }

export interface TRadioGroupProps extends TBaseProps, TValidatorProps {
    className?: string,
    style?: CSSProperties,
    width?: string,
    
    value: TRadioGroupValue,
    items: TRadioGroupItem[],
    disabled?: boolean,
    
    textKey?: string,
    valueKey?: string,
    
    labelTemplate?: (item: TRadioGroupItem) => string,
    labelId?: string,
    
    onChange(value: TRadioGroupValue): void,
}


export interface TRadioGroupRef {
    validate(): true | string,
}
