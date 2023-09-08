import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TBadgeProps extends TBaseProps {

    max?: number,
    dot?: boolean,
    inline?: boolean,
    showZero?: boolean,
    content: number,

    children?: ReactNode,
    color?: string,

}
