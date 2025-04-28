import type {MaterialSymbol} from '@material-symbols/font-300';
import type {MouseEvent, ReactNode} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

import type {TIconSize} from '~/icon';

type chipType = ['outlined', 'fill'][number];

export interface TChipProps extends TBaseProps {
    children?: ReactNode;

    type?: chipType;
    outlined?: boolean;
    fill?: boolean;

    prevIcon?: MaterialSymbol;
    prevIconColor?: string;
    prevIconSize?: TIconSize;

    onRemove?: (event?: MouseEvent) => void;
}

export interface TChipRef {
    remove(): void;
}
