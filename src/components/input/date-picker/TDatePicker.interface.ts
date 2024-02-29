import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TDateValue {
    year: number | null,
    month: number | null,
    day: number | null,
}

export type TDatePickerValueType = 'date' | 'month' | 'year';


export interface TDatePickerProps extends TBaseProps, TValidatorProps {

    value?: string,
    valueType?: TDatePickerValueType

    disabled?: boolean,
    openFrom?: string,
    openTo?: string,

    // dateFormat?: 'YYYY-MM-DD' | 'DD-MM-YYYY' | 'MM-DD-YYYY', // TODO. Should be implemented
    separator?: string,

    onChange?(value: boolean | string, positiveValue?: boolean | string): void,
}

export interface TDatePickerRef {
    focus(): void,
    open(): void,
    validate(): true | string,
    getDate(): string,
}

export interface TDateLimit {
    openFrom?: string,
    openTo?: string,
}

export interface ViewInfoType {
    original: TDatePickerValueType
    current: TDatePickerValueType,
}

