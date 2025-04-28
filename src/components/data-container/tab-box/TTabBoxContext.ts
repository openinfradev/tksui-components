'use client';

import {createContext} from 'react';

import type {TTabBoxValue} from '@/components';

type tabBoxContext = {
    activeTab: TTabBoxValue;
    onChangeActiveTab: (activeTab: TTabBoxValue) => void;
};

export const tabBoxContext = createContext<tabBoxContext>({
    activeTab: 0,
    onChangeActiveTab: null,
});

export default tabBoxContext;
