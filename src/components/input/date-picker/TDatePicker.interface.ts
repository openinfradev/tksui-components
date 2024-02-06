import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TDateValue {
    year: number | null,
    month: number | null,
    date: number | null,
}

export type TDatePickerViewType = 'date' | 'month' | 'year';

export interface TDatePickerProps extends TBaseProps, TValidatorProps {

    readOnly?: boolean,
    disabled?: boolean,
    value?: string,

    openForm?: string,
    openTo?: string,

    view?: TDatePickerViewType
    dateFormat?: 'YYYY-MM-DD' | 'DD-MM-YYYY' | 'MM-DD-YYYY',

    onChange?(value: boolean | string, positiveValue?: boolean | string): void,
}

export interface TDatePickerRef {
    focus(): void,
    open(): void,
    validate(): true | string,
    getDate(): string,
}

export interface TDaySelectorProps {
    value: string,
    onChange: (date: string) => void,

    openFrom?: string,
    openTo?: string,
}

export interface TDateContextType {
    dateValue: string,

    handleDateValueChange: (date: string) => void
    changeViewMode: (view: TDatePickerViewType) => void
}
