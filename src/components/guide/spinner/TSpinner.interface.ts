import {TBaseProps} from '@/common/base/TBase.interface';

export type SpinnerVariant = 'default'

export const spinnerSize = {xsmall: 'xsmall', small: 'small', medium: 'medium', large: 'large', xlarge: 'xlarge'} as const;
type SpinnerSizeType = typeof spinnerSize[keyof typeof spinnerSize];
export interface TSpinnerProps extends TBaseProps {
    variant?: SpinnerVariant,
    size?: SpinnerSizeType,
    color?: string,
    thickness?: string,
}

