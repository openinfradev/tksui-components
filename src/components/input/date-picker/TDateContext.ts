import {createContext} from 'react';
import {TDateContextType} from '~/input/date-picker/TDatePicker.interface';


export const datePickerConText = createContext<TDateContextType>({
    dateValue: '',
    handleDateValueChange: (date) => date,
    changeViewMode: (view) => view,
});
export default datePickerConText;

