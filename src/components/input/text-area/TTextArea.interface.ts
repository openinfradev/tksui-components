import {KeyboardEvent} from 'react';
import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

const textFieldType = ['outline', 'underline'] as const;
type textFieldType = typeof textFieldType[number];

export interface TTextAreaProps extends TValidatorProps, TBaseProps {

    type?: textFieldType,

    disabled?: boolean,
    required?: boolean,

    placeholder?: string,
    label?: string,
    counter?: number,

    value: string,
    width?: string,
    rows?: number,


    onChange(value: string): void,
    onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void,
    onKeyDownEnter?: (event: KeyboardEvent<HTMLTextAreaElement>) => void,

}


export interface TTextAreaRef {
    focus(): void,
    validate(): true | string,
}
