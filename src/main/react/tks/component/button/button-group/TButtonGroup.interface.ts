import {ReactNode} from 'react';
import {TBaseProps} from '~/tks/component/common/base/TBase.interface';

export type TButtonGroupValue = any;

export interface TButtonGroupItem {
    template: ReactNode,
    value: TButtonGroupValue,
}

export interface TButtonGroupProps extends TBaseProps {
    value: TButtonGroupValue,
    items: TButtonGroupItem[],
    onChange(value: TButtonGroupValue): void,

    multiSelect?: boolean,

    primary?: boolean,
    disabled?: boolean,
}
