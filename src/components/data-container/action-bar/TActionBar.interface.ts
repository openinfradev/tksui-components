import type {ReactNode} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

export interface TActionBarProps extends TBaseProps {
    leftAction?: ReactNode;
    centerAction?: ReactNode;
    rightAction?: ReactNode;
}
