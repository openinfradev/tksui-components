import {MouseEvent, KeyboardEvent, ReactNode} from 'react';
import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TTextFieldProps extends TValidatorProps, TBaseProps {

    disabled?: boolean,
    password?: boolean,
    clearable?: boolean,
    searchable?: boolean,
    customAction?: ReactNode,
    required?: boolean,
    noTrim?: boolean,
    readOnly? : boolean,
    dense?: boolean,

    placeholder?: string,
    label?: string,
    hint?: string,
    counter?: number,
    value: string,
    width?: string,
    autoComplete?: 'new-password' | 'off' | undefined,
    multiline?: boolean
    rows?: number,

    onChange(value: string): void,
    onBlur?(): void,
    onFocus?(): void,
    onKeyDown?(event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void,
    onKeyDownEnter?(event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void,
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
