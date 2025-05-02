import type {ReactNode} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

export type TRadioValue = boolean | string;

export interface TRadioProps extends TBaseProps {
    children?: ReactNode;
    positiveValue?: TRadioValue;

    selected?: boolean;
    disabled?: boolean;

    onSelect(value: TRadioValue): void;
}
