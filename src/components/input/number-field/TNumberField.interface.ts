import {KeyboardEvent} from 'react';
import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

const numberFieldType = ['outline', 'underline'] as const;
type numberFieldType = typeof numberFieldType[number];

export interface TNumberFieldProps extends TBaseProps, TValidatorProps {


    type?: numberFieldType,

    min?: number,
    max?: number,
    step?: number,

    disabled?: boolean,
    required?: boolean,

    placeholder?: string,
    label?: string,
    hint?: string,
    value: string,
    width?: string,

    onChange(value: string): void,

    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void,
    onKeyDownEnter?: (event: KeyboardEvent<HTMLInputElement>) => void,
}


export interface TNumberFieldRef {
    focus(): void,

    validate(): true | string,

    manualValidate(result: boolean, message?: string): void,
}
