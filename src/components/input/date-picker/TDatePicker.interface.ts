import {Dispatch, SetStateAction} from 'react';
import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TDateValue {
    year: number | null,
    month: number | null,
    day: number | null,
}

export type TDatePickerViewType = 'date' | 'month' | 'year';


export interface TDatePickerProps extends TBaseProps, TValidatorProps {

    disabled?: boolean,
    value?: string,

    openFrom?: string,
    openTo?: string,

    view?: TDatePickerViewType
    dateFormat?: 'YYYY-MM-DD' | 'DD-MM-YYYY' | 'MM-DD-YYYY',
    separator?: string,

    onChange?(value: boolean | string, positiveValue?: boolean | string): void,
}

export interface TDatePickerRef {
    focus(): void,
    open(): void,
    validate(): true | string,
    getDate(): string,
}

export interface TDateRange {
    openFrom?: string,
    openTo?: string,
}

interface ViewInfoType {
    original: TDatePickerViewType
    current: TDatePickerViewType,
}

export interface TDateContextType {
    nowDate: () => TDateValue,

    dateValue: string,

    displayDateObject: TDateValue,
    setDisplayDateObject: Dispatch<SetStateAction<TDateValue>>

    handleDateValueChange: (date: string) => void,
    viewMode: ViewInfoType,
    changeViewMode: (view: TDatePickerViewType) => void,

    dateRange: TDateRange,
    validDateRange: (date: string) => boolean

    parseDateString: (date: string) => TDateValue,
    parseDateObject: (dateObj: TDateValue) => string,
}
