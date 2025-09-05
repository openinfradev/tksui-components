import type {Ref} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';
import type {TValidatorProps} from '@/common/validator/TValidator.interface';

export interface TDateValue {
    year: number | null;
    month: number | null;
    day: number | null;
    hour?: number | null;
    minute?: number | null;
}

export type TDatePickerMode = 'time' | 'date' | 'date-time' | 'month' | 'year';

export interface TDatePickerProps extends TBaseProps, TValidatorProps {
    value?: string;
    valueType?: TDatePickerMode;

    disabled?: boolean;
    openFrom?: string;
    openTo?: string;

    // dateFormat?: 'YYYY-MM-DD' | 'DD-MM-YYYY' | 'MM-DD-YYYY', // TODO. Should be implemented
    separator?: string;

    ref?: Ref<TDatePickerRef>;

    onChange?(value: boolean | string, positiveValue?: boolean | string): void;
}

export interface TDatePickerRef {
    focus(): void;
    open(): void;
    validate(): true | string;
    getDate(): string;
    scrollToComponent(): void;
}

export interface TDatePickerBounds {
    openFrom?: string;
    openTo?: string;
}

export interface ViewInfoType {
    original: TDatePickerMode;
    current: TDatePickerMode;
}
