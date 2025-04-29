'use client';

import {createContext} from 'react';

import type {RowVerticalAlign} from '@/components';

export interface TFormSectionContextInterface {
    column: number;
    labelWidth: string;

    rowVerticalAlign: RowVerticalAlign;
}

export const TFormSectionContext = createContext<TFormSectionContextInterface>({
    column: 2,
    labelWidth: '104px',

    rowVerticalAlign: 'middle',
});

export default TFormSectionContext;
