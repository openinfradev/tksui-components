import {createContext} from 'react';
import {TSearchBoxContextInterface} from './TSearchBox.interface';

export const searchBoxContext = createContext<TSearchBoxContextInterface>({
    column: 2,
    labelWidth: '500px',
});

export default searchBoxContext;
