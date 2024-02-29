import {useCallback} from 'react';
import {TDatePickerValueType, TDateValue} from '@/components';

const convertToDateValue = (date: string): TDateValue => {
    // YYYY-MM-DD -> {year: '2024', month: '02', date: '29'}
    const yearPart = date?.substring(0, 4);
    const monthPart = date?.substring(4, 6);
    const dayPart = date?.substring(6, 8);

    return {year: Number(yearPart), month: Number(monthPart), day: Number(dayPart)};
};


const convertToDateString = ({year, month, day}: TDateValue): string => {
    const pad = (num: number) => String(num).padStart(2, '0');
    return `${year}${pad(month)}${pad(day)}`;
};


const formattedDate = (date: string, separator: string) => {

    const dateLength = date.length;
    const yearStr = date.substring(0, 4);
    const monthStr = date.substring(4, 6);
    const dayStr = date.substring(6, 8);

    if (dateLength < 5) { return yearStr; }
    if (dateLength < 7) { return `${yearStr}${separator}${monthStr}`; }
    return `${yearStr}${separator}${monthStr}${separator}${dayStr}`;
};


const sanitizeDateInput = (dateStr: string, valueType: TDatePickerValueType) => {

    let maxAllowedLength = 8;

    if (valueType === 'month') {
        maxAllowedLength = 6;
    } else if (valueType === 'year') {
        maxAllowedLength = 4;
    }

    return dateStr?.replace(/\D/g, '')
        .replace(/^0+/, '').substring(0, maxAllowedLength);
};

const validateDateFormat = (dateStr: string, valueType: TDatePickerValueType): boolean => {

    const {year, month, day} = convertToDateValue(dateStr);
    const lastDayOfMonth = (new Date(year, month, 0)).getDate();

    const isValidYear = year > 999;
    const isValidMonth = (month > 0 && month < 13);
    const isValidDate = (day > 0 && day <= lastDayOfMonth);

    if (valueType === 'date') {
        if (isValidYear && isValidMonth && isValidDate) { return true; }
    } else if (valueType === 'month') {
        if (isValidYear && isValidMonth) { return true; }
    } else if (valueType === 'year') {
        if (isValidYear) { return true; }
    }
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
};


export default {
    convertToDateValue,
    convertToDateString,
    formattedDate,
    sanitizeDateInput,
    validateDateFormat,
};
