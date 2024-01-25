import {TValidatorProps} from '@/common/validator/TValidator.interface';
import {TBaseProps} from '../../../common/base/TBase.interface';


export interface TDateValue {
    year: number | null,
    month: number | null,
    date: number | null,
}

export interface TDatePickerProps extends TBaseProps, TValidatorProps {

    readOnly?: boolean,
    disabled?: boolean,
    value?: string,

    openForm?: string,
    openTo?: string,

    view?: 'date' | 'month' | 'year',
    dateFormat?: 'YYYY-MM-DD' | 'DD-MM-YYYY' | 'MM-DD-YYYY',

    onChange?(value: boolean | string, positiveValue?: boolean | string): void,
}


export interface TDatePickerRef {
    focus(): void,
    validate(): true | string,
    open(): void
}
