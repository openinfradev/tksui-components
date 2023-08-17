import {ITooltip, ITooltipWrapper} from 'react-tooltip';
import {TBaseProps} from '~/tks/component/common/base/TBase.interface';

export interface TTooltipProps extends TBaseProps, ITooltip {
    maxWidth?: string;
}
