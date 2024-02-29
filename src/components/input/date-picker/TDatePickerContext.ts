import {createContext, Dispatch, SetStateAction} from 'react';
import {TDatePickerValueType, TDateLimit, TDateValue, ViewInfoType} from '~/input/date-picker/TDatePicker.interface';


export interface TDatePickerContext {
    nowDate: () => TDateValue,

    dateValue: string,

    displayDateObject: TDateValue,
    setDisplayDateObject: Dispatch<SetStateAction<TDateValue>>

    onChangeValue: (date: string) => void,
    viewMode: ViewInfoType,
    changeViewMode: (view: TDatePickerValueType) => void,

    dateRange: TDateLimit,
    validDateRange: (date: string) => boolean

    parseDateString: (date: string) => TDateValue,
    parseDateObject: (dateObj: TDateValue) => string,
}

export const datePickerConText = createContext<TDatePickerContext>({
    nowDate: null,

    dateValue: '',
    onChangeValue: (date) => date,

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

