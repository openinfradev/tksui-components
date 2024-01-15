import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TActionBarProps extends TBaseProps {

    leftAction?: ReactNode,
    centerAction?: ReactNode,
    rightAction?: ReactNode,
}
