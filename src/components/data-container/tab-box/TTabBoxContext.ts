import {createContext, CSSProperties, MouseEvent} from 'react';
import {TTabBoxValue} from './TTabBox.interface';

type tabBoxContext = {
    activeTab: TTabBoxValue,
    onChangeActiveTab: (activeTab: TTabBoxValue) => void,
}

export const tabBoxContext = createContext<tabBoxContext>(
    {
        activeTab: 0,
        onChangeActiveTab: null,
    },
);

export default tabBoxContext;
