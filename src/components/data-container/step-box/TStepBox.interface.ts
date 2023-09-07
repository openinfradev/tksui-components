import {ReactElement} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export type TStepBoxValue = number;

export interface TStepBoxProps extends TBaseProps {
    children: ReactElement[],
    value: number,
    onChange: (value: TStepBoxValue) => void,
    prevButtonLabel?: string,
    nextButtonLabel?: string,
    completeButtonLabel?: string,
}

export interface TStepBoxHeaderProps extends TBaseProps {
    content: {
        stepNumber: number,
        label: string,
    }[],
}

export interface TStepBoxItemProps {
    label?: string | ReactElement,
    content?: ReactElement,
    previousButtonLabel?: string,
    nextButtonLabel?: string,
    customNextButton?: ReactElement,
    validateStep?: () => boolean,
    onClickNext?: () => void,
    onClickPrev?: () => void,
}

export interface TStepBoxFooterProps {
    prevButtonLabel: string,
    nextButtonLabel: string,
    completeButtonLabel: string,
    content: {
        stepNumber: number,
        validateStep?: () => boolean,
        onClickNext?: () => void,
        onClickPrev?: () => void
        customNextButton?: ReactElement,
    }[],
}

