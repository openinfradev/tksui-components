import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TTextArrayFieldProps extends TValidatorProps, TBaseProps {

    value: string[],
    duplicable?: boolean,
    duplicateMessage?: string,
    hint?: string,

    onChange(value: string[]): void,
}


export interface TTextArrayFieldRef {

    validate(): true | string,
    manualValidate(result: boolean, message?: string): void,
    clearValidation(): void,
    getValidateResult(): boolean,
    getValidateMessage(): string,
    scrollToComponent(): void,
}
