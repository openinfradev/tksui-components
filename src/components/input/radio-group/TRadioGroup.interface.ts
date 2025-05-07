import type {CSSProperties} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';
import type {TValidatorProps} from '@/common/validator/TValidator.interface';
import type {TRadioValue} from '@/components';

export type TRadioGroupValue = TRadioValue;

export interface TRadioGroupItem {
    [key: string]: any;
}

export interface TRadioGroupProps extends TBaseProps, TValidatorProps {
    className?: string;
    style?: CSSProperties;
    width?: string;

    value: TRadioGroupValue;
    items: TRadioGroupItem[];
    disabled?: boolean;

    textKey?: string;
    valueKey?: string;

    labelTemplate?: (item: TRadioGroupItem) => string;

    onChange(value: TRadioGroupValue): void;
}

export interface TRadioGroupRef {
    validate(): true | string;
    scrollToComponent(): void;
}
