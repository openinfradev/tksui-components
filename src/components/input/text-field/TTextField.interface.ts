import type {KeyboardEvent, MouseEvent, ReactNode, Ref} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';
import type {TValidatorProps} from '@/common/validator/TValidator.interface';

interface TTextFieldBaseProps extends TValidatorProps, TBaseProps {
    disabled?: boolean;
    password?: boolean;
    clearable?: boolean;
    searchable?: boolean;
    customAction?: ReactNode;
    required?: boolean;
    noTrim?: boolean;
    readOnly?: boolean;
    dense?: boolean;

    placeholder?: string;
    label?: string;
    hint?: string;
    counter?: number;
    width?: string;
    autoComplete?: 'new-password' | 'off' | undefined;
    multiline?: boolean;
    rows?: number;

    ref?: Ref<TTextFieldRef>;

    onBlur?(): void;
    onFocus?(): void;
    onKeyDown?(event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void;
    onKeyDownEnter?(event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void;
    onClickSearch?(event: MouseEvent): void;
    onClear?(): void;
}

export interface TTextFieldControlledProps extends TTextFieldBaseProps {
    value: string;
    onChange: (value: string) => void;

    name?: never;
}

export interface TTextFieldUncontrolledProps extends TTextFieldBaseProps {
    value?: never;
    onChange?: never;

    name: string;
}

export type TTextFieldProps = TTextFieldControlledProps | TTextFieldUncontrolledProps;

export interface TTextFieldRef {
    focus(): void;
    scrollToComponent(): void;
    blur(): void;
    validate(): true | string;
    manualValidate(result: boolean, message?: string): void;
    clearValidation(): void;
    getValidateResult(): boolean;
    getValidateMessage(): string;
}
