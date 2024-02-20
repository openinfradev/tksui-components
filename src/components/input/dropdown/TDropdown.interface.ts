import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

type dropdownType = 'outline' | 'underline';

export interface TDropdownItem {
    [key: string]: any;
}

export type TDropdownValue = string | string[];

export interface TDropdownProps extends TValidatorProps, TBaseProps {
    itemsClassName?: string,
    type?: dropdownType,
    width?: string,

    items: TDropdownItem[],
    value: TDropdownValue,

    multiple?: boolean,
    disabled?: boolean,
    noDetail?: boolean,
    chip?: boolean,
    placeholder?: string,
    filterPlaceholder?: string,

    textKey?: string,
    valueKey?: string,

    itemTemplate?: (item: TDropdownItem) => string,

    onChange(value: string | string[]): void,
    onOpen?(): void,
    onClose?(): void,
}


export interface TDropdownRef {
    focus(): void,

    validate(): true | string,
}
