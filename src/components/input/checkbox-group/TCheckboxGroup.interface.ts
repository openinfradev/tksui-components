import type {Ref} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';
import type {TValidatorProps} from '@/common/validator/TValidator.interface';
import type {TCheckboxValue} from '@/components';

export type TCheckboxGroupValue = TCheckboxValue[];

export interface TCheckboxGroupItem {
    [key: string]: any;
}

export interface TCheckboxGroupProps extends TBaseProps, TValidatorProps {
    value: TCheckboxGroupValue;
    items: TCheckboxGroupItem[];
    disabled?: boolean;
    readOnly?: boolean;

    textKey?: string;
    valueKey?: string;

    labelTemplate?: (item: TCheckboxGroupItem) => string;

    ref?: Ref<TCheckboxGroupRef>;

    onChange(value: TCheckboxGroupValue): void;
}

export interface TCheckboxGroupRef {
    validate(): true | string;
    scrollToComponent(): void;
}
