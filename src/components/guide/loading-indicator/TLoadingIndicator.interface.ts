import type {TBaseProps} from '@/common/base/TBase.interface';

export const loadingIndicatorSize = {
    xsmall: 'xsmall',
    small: 'small',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge',
} as const;
export const loadingIndicatorVariant = {default: 'default', sun: 'sun'} as const;

type loadingIndicatorSizeType = (typeof loadingIndicatorSize)[keyof typeof loadingIndicatorSize];
type loadingIndicatorVariantType = (typeof loadingIndicatorVariant)[keyof typeof loadingIndicatorVariant];

export interface TLoadingIndicatorProps extends TBaseProps {
    variant?: loadingIndicatorVariantType;
    size?: loadingIndicatorSizeType;
    color?: string;
    message?: string;
}
