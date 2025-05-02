import type {ReactNode} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

export interface TBadgeProps extends TBaseProps {
    max?: number;
    dot?: boolean;
    inline?: boolean;
    showZero?: boolean;
    content: number;

    children?: ReactNode;
    color?: string;
}
