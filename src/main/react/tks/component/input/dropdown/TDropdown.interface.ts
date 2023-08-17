import {TValidatorProps} from '~/tks/component/common/validator/TValidator.interface';

type dropdownType = 'outline' | 'underline';

export interface TDropdownItem {
    [key: string]: any;
}

export type TDropdownValue = string | string[];

export interface TDropdownProps extends TValidatorProps {
    className?: string,
    itemsClassName?: string,
    style?: { [key: string]: string },
    type?: dropdownType,
    width?: string,

    items: TDropdownItem[],
    value: TDropdownValue,

    multiple?: boolean,
    disabled?: boolean,
    noDetail?: boolean,
    placeholder?: string,

    textKey?: string,
    valueKey?: string,

    itemTemplate?: (item: TDropdownItem) => string,

    onChange(value: string | string[]): void,

    chip?: boolean,
}


export interface TDropdownRef {
    focus(): void,

    validate(): true | string,
}
