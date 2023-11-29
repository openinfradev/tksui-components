import {MouseEvent, KeyboardEvent} from 'react';
import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

const textFieldType = ['outline', 'underline'] as const;
type textFieldType = typeof textFieldType[number];

export interface TTextFieldProps extends TValidatorProps, TBaseProps {

    type?: textFieldType,

    disabled?: boolean,
    password?: boolean,
    clearable?: boolean,
    searchable?: boolean,
    required?: boolean,
    noTrim?: boolean,
    readOnly? : boolean,

    placeholder?: string,
    label?: string,
    hint?: string,
    counter?: number,
    value: string,
    width?: string,
    autoComplete?: 'new-password' | 'off' | undefined,

    onChange(value: string): void,
    onBlur?(): void,
    onFocus?(): void,
    onKeyDown?(event: KeyboardEvent<HTMLInputElement>): void,
    onKeyDownEnter?(event: KeyboardEvent<HTMLInputElement>): void,
    onClickSearch?(event: MouseEvent): void,
    onClear?(): void,
}


export interface TTextFieldRef {
    focus(): void,
    blur(): void,
    validate(): true | string,
    manualValidate(result: boolean, message?: string): void,
    clearValidation(): void,
    getValidateResult(): boolean,
    getValidateMessage(): string,
}
