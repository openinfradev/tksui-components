'use client';

import type {Dispatch, SetStateAction} from 'react';
import {createContext} from 'react';

import type {
    TDatePickerBounds,
    TDatePickerMode,
    TDateValue,
    ViewInfoType,
} from '~/input/date-picker/TDatePicker.interface';

export interface TDatePickerContext {
    nowDate: () => TDateValue;

    dateValue: string;

    displayDateObject: TDateValue;
    setDisplayDateObject: Dispatch<SetStateAction<TDateValue>>;

    onChangeValue: (date: string) => void;
    viewMode: ViewInfoType;
    changeViewMode: (view: TDatePickerMode) => void;

    dateRange: TDatePickerBounds;
    validDateRange: (date: string) => boolean;

    parseDateString: (date: string) => TDateValue;
    parseDateObject: (dateObj: TDateValue) => string;

    showTime: boolean;
    timeValue: string;
    onChangeTimeValue: (time: string) => void;

    // 임시값들 (date-time 모드용)
    tempDateValue: string;
    tempTimeValue: string;
    
    // 새로운 이벤트 핸들러들
    onChangeTempDate: (date: string) => void;
    onChangeTempTime: (time: string) => void;
    onConfirm: () => void;
    onCancel: () => void;
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

    showTime: false,
    timeValue: '',
    onChangeTimeValue: (time) => time,

    // 임시값들
    tempDateValue: '',
    tempTimeValue: '',
    
    // 새로운 이벤트 핸들러들
    onChangeTempDate: (date) => date,
    onChangeTempTime: (time) => time,
    onConfirm: () => {},
    onCancel: () => {},
});
export default datePickerConText;
