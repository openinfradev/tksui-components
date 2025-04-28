import type {MaterialSymbol} from '@material-symbols/font-300';
import type {MouseEvent, ReactNode} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

import type {TIconSize} from '~/icon';

const chipType = ['outlined', 'fill'] as const;
type chipType = (typeof chipType)[number];

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
