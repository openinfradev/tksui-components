import type {ReactElement, ReactNode} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

export interface TSectionProps extends TBaseProps {
    children: ReactNode;

    label?: string;
    customLabel?: ReactElement;

    leftAction?: ReactElement;
    rightAction?: ReactElement;

    contentClassName?: string;
    width?: string;
}
