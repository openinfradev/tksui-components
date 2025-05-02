'use client';

import {useState} from 'react';

import type {TCheckboxGroupValue, TCheckboxValue, TRadioGroupValue} from '@/components';

export default function useValidator(
    target: string | number | boolean | TRadioGroupValue | TCheckboxGroupValue | TCheckboxValue,
    rules?: ((v: unknown) => true | string)[],
    successMessage?: string,
    initialResult = true
) {
    const [result, setResult] = useState(initialResult);
    const [message, setMessage] = useState('');

    const validate = (): true | string => {
        try {
            rules?.forEach((rule) => {
                const resultOfRule = rule(target);
                if (resultOfRule !== true) {
                    throw Error(resultOfRule);
                }
            });
        } catch (err) {
            if (err instanceof Error) {
                setMessage(err.message);
                setResult(false);
                return err.message;
            }
        }
        setMessage(successMessage || '');
        setResult(true);

        return true;
    };

    const manualValidate = (manualResult: boolean, manualMessage?: string): void => {
        setResult(manualResult);
        if (manualMessage) {
            setMessage(manualMessage);
        }
    };

    const clearValidation = () => {
        setMessage('');
        setResult(true);
    };

    return {result, message, validate, clearValidation, manualValidate};
}
