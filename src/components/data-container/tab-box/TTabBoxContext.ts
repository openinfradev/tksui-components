'use client';

import {createContext} from 'react';

import type {TTabBoxValue} from '@/components';

export type tabBoxContextType = {
    activeTab: TTabBoxValue;
    onChangeActiveTab: (activeTab: TTabBoxValue) => void;
};

export const tabBoxContext = createContext<tabBoxContextType>({
    activeTab: 0,
    onChangeActiveTab: null,
});

export default tabBoxContext;
