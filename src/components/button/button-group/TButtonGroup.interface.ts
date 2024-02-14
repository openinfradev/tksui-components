import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export type TButtonGroupValue = any;

export interface TButtonGroupItem {
    template: ReactNode,
    value: TButtonGroupValue,
}

export const ButtonGroupVariant = {
    primary: 'primary',
    main: 'main',
} as const;

export type ButtonGroupVariantType = typeof ButtonGroupVariant[keyof typeof ButtonGroupVariant];


export interface TButtonGroupProps extends TBaseProps {
    value: TButtonGroupValue,
    items: TButtonGroupItem[],
    onChange(value: TButtonGroupValue): void,

    multiSelect?: boolean,

    disabled?: boolean,

    variant?: ButtonGroupVariantType,
    primary?: boolean,
    main?: boolean,
}
