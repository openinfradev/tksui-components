import {createContext} from 'react';
import {RowVerticalAlign} from '@/components';


interface FormContext {
    column: number,
    labelWidth: string,
}


export const formSectionContext = createContext<FormContext>(null);

export const formSectionRowContext = createContext<{verticalAlign: RowVerticalAlign}>(null);

export default formSectionContext;

