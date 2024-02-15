import {createContext} from 'react';
import {TDateContextType} from '~/input/date-picker/TDatePicker.interface';


export const datePickerConText = createContext<TDateContextType>({
    nowDate: null,

    dateValue: '',
    handleDateValueChange: (date) => date,

    displayDateObject: null,
    setDisplayDateObject: null,

    viewMode: {current: 'date', original: 'date'},
    changeViewMode: (view) => view,

    dateRange: {},

    validDateRange: null,
    parseDateString: null,
    parseDateObject: null,
});
export default datePickerConText;

