import {createContext} from 'react';
import {TSearchBoxContextInterface} from '~/tks/component/data-container/search-box/TSearchBox.interface';

export const searchBoxContext = createContext<TSearchBoxContextInterface>({
    column: 2,
    labelWidth: '500px',
});

export default searchBoxContext;
