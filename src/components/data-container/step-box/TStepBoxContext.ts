'use client';

import {createContext} from 'react';

import type {TStepBoxValue} from '@/components';

type stepBoxContext = {
    totalStep: number;
    currentStep: TStepBoxValue;
    onChangeCurrentStep: (step: number) => void;
    prevButtonLabel: string;
    nextButtonLabel: string;
    completeButtonLabel: string;
};

export const tabBoxContext = createContext<stepBoxContext>({
    totalStep: 0,
    currentStep: 0,
    onChangeCurrentStep: () => {},
    prevButtonLabel: '',
    nextButtonLabel: '',
    completeButtonLabel: '',
});

export default tabBoxContext;
