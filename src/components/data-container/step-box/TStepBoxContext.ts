import {createContext} from 'react';
import {TStepBoxValue} from './TStepBox.interface';

type stepBoxContext = {
    totalStep: number,
    currentStep: TStepBoxValue,
    onChangeCurrentStep: (step: number) => void,
    prevButtonLabel: string,
    nextButtonLabel: string,
    completeButtonLabel: string,
}

export const tabBoxContext = createContext<stepBoxContext>(
    {
        totalStep: 0,
        currentStep: 0,
        onChangeCurrentStep: null,
        prevButtonLabel: '',
        nextButtonLabel: '',
        completeButtonLabel: '',
    },
);

export default tabBoxContext;
