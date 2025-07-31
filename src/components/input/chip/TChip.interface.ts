import type {MaterialSymbol} from '@material-symbols/font-300';
import type {MouseEvent, ReactNode, Ref} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

import type {TIconSize} from '~/icon';

type chipType = ['outlined', 'fill'][number];

export interface TChipProps extends TBaseProps {
    children?: ReactNode;
    value?: any;

    type?: chipType;
    outlined?: boolean;
    fill?: boolean;

    prevIcon?: MaterialSymbol;
    prevIconColor?: string;
    prevIconSize?: TIconSize;

    ref?: Ref<TChipRef>;

    onRemove?: (event?: MouseEvent, value?: any) => void;
    onClick?: (event?: MouseEvent, value?: any) => void;
}

export interface TChipRef {
    remove(): void;
}
