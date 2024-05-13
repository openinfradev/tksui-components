import {createContext} from 'react';
import {RowVerticalAlign} from '@/components';


export interface TFormSectionContext {
    column: number,
    labelWidth: string,

    rowVerticalAlign: RowVerticalAlign
}

export const TFormSectionContext = createContext<TFormSectionContext>({
    column: 2,
    labelWidth: '104px',

    rowVerticalAlign: 'middle',

});

export default TFormSectionContext;

