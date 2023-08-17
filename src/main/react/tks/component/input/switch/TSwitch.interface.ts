import {ReactNode} from 'react';
import {TBaseProps} from '~/tks/component/common/base/TBase.interface';


export type TSwitchValue = boolean | string;

export interface TSwitchProps extends TBaseProps {
    
    disabled?: boolean,
    
    value?: TSwitchValue,
    positiveValue?: TSwitchValue,
    negativeValue?: TSwitchValue,
    
    label?: ReactNode,

    onChange(value: TSwitchValue): void,
    
}

