import {createContext} from 'react';

export const formSectionContext = createContext({
    column: 2,
    gridType: {
        value: false,
        rowHeight: '96px',
        labelWidth: '170px',
    },
});

export default formSectionContext;
