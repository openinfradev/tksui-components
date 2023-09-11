import {ReactElement} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export type TStepBoxValue = number;

export interface TStepBoxProps extends TBaseProps {
    children: ReactElement[],
    value: number,
    stepLabels: (string | ReactElement)[],
    onChange: (value: TStepBoxValue) => void,
    prevButtonLabel?: string,
    nextButtonLabel?: string,
    completeButtonLabel?: string,
}

export interface TStepBoxHeaderProps extends TBaseProps {
    content: {stepNumber: number, label: string | ReactElement}[],
}

export interface TStepBoxItemProps {
    children?: ReactElement,
    label?: string | ReactElement, // delete
    prevButtonLabel?: string,
    nextButtonLabel?: string,
    completeButtonLabel?: string,
    customNextButton?: ReactElement,
    validateStep?: () => boolean,
    onClickNext?: () => void,
    onClickPrev?: () => void,
}

export interface TStepBoxFooterProps {
    prevButtonLabel: string,
    nextButtonLabel: string,
    completeButtonLabel: string,
    customNextButton?: ReactElement,
    validateStep?: () => boolean,
    onClickNext?: () => void,
    onClickPrev?: () => void
}

