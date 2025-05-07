import type {Ref} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';
import type {TValidatorProps} from '@/common/validator/TValidator.interface';

export interface TTextArrayFieldProps extends TValidatorProps, TBaseProps {
    value: string[];
    duplicable?: boolean;
    duplicateMessage?: string;
    placeholder?: string;

    ref?: Ref<TTextArrayFieldRef>;

    onChange(value: string[]): void;
}

export interface TTextArrayFieldRef {
    validate(): true | string;
    manualValidate(result: boolean, message?: string): void;
    clearValidation(): void;
    getValidateResult(): boolean;
    getValidateMessage(): string;
    scrollToComponent(): void;
}
