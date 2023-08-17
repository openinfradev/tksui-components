import {CSSProperties} from 'react';
import {TValidatorProps} from '~/tks/component/common/validator/TValidator.interface';
import {TRadioValue} from '~/tks/component/input/radio/TRadio.interface';
import {TBaseProps} from '~/tks/component/common/base/TBase.interface';

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
    
    onChange(value: TRadioGroupValue): void,
}


export interface TRadioGroupRef {
    validate(): true | string,
}
