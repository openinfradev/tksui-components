import {createContext} from 'react';


interface FormContext {
    column: number,
    labelWidth: string,
}


export const formSectionContext = createContext<FormContext>(null);
export default formSectionContext;

