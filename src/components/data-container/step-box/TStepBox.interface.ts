import type {ReactElement} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';
import type {contentDirection} from '@/components';

export type TStepBoxValue = number;

export interface TStepBoxProps extends TBaseProps {
    children: ReactElement[];
    value: number;
    stepLabels: (string | ReactElement)[];
    onChange: (value: TStepBoxValue) => void;
    prevButtonLabel?: string;
    nextButtonLabel?: string;
    completeButtonLabel?: string;
}

export interface TStepBoxHeaderProps extends TBaseProps {
    content: {stepNumber: number; label: string | ReactElement}[];
}

type ContentDirection = (typeof contentDirection)[keyof typeof contentDirection];

export interface TStepBoxItemProps extends TBaseProps {
    children?: any;
    contentDirection?: ContentDirection;
    prevButtonLabel?: string;
    nextButtonLabel?: string;
    nextButtonDisabled?: boolean;
    completeButtonLabel?: string;
    customNextButton?: ReactElement;
    validateStep?: () => boolean;
    onClickNext?: () => void;
    onClickPrev?: () => void;
}

export interface TStepBoxFooterProps {
    prevButtonLabel: string;
    nextButtonLabel: string;
    nextButtonDisabled?: boolean;
    completeButtonLabel: string;
    customNextButton?: ReactElement;
    validateStep?: () => boolean;
    onClickNext?: () => void;
    onClickPrev?: () => void;
}
