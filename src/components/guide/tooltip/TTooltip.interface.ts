import type {ITooltip} from 'react-tooltip';

import type {TBaseProps} from '@/common/base/TBase.interface';

export interface TTooltipProps extends TBaseProps, ITooltip {
    maxWidth?: string;
}
