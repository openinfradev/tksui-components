import type {TDatePickerBounds, TDatePickerMode, TDateValue} from '@/components';

const convertToDateValue = (date: string): TDateValue => {
    // YYYY-MM-DD HH:MM -> {year: '2024', month: '02', day: '29', hour: '14', minute: '30'}
    const yearPart = date?.substring(0, 4);
    const monthPart = date?.substring(4, 6);
    const dayPart = date?.substring(6, 8);
    const hourPart = date?.substring(8, 10);
    const minutePart = date?.substring(10, 12);

    return {
        year: Number(yearPart),
        month: Number(monthPart),
        day: Number(dayPart),
        hour: hourPart ? Number(hourPart) : null,
        minute: minutePart ? Number(minutePart) : null,
    };
};

const convertToDateString = ({year, month, day, hour, minute}: TDateValue): string => {
    const pad = (num: number) => String(num).padStart(2, '0');
    let result = `${year}${pad(month)}${pad(day)}`;

    if (hour !== null && hour !== undefined) {
        result += pad(hour);
        result += pad(minute || 0);
    }

    return result;
};

const addDateSeparator = (date: string, separator: string) => {
    const dateLength = date.length;
    const yearStr = date.substring(0, 4);
    const monthStr = date.substring(4, 6);
    const dayStr = date.substring(6, 8);
    const hourStr = date.substring(8, 10);
    const minuteStr = date.substring(10, 12);

    if (dateLength < 5) {
        return yearStr;
    }
    if (dateLength < 7) {
        return `${yearStr}${separator}${monthStr}`;
    }
    if (dateLength < 9) {
        return `${yearStr}${separator}${monthStr}${separator}${dayStr}`;
    }
    if (dateLength < 11) {
        return `${yearStr}${separator}${monthStr}${separator}${dayStr} ${hourStr}`;
    }
    return `${yearStr}${separator}${monthStr}${separator}${dayStr} ${hourStr}:${minuteStr}`;
};

const sanitizeDateInput = (dateStr: string, valueType: TDatePickerMode) => {
    let maxAllowedLength = 8;

    if (valueType === 'date-time') {
        maxAllowedLength = 12;
    } else if (valueType === 'month') {
        maxAllowedLength = 6;
    } else if (valueType === 'year') {
        maxAllowedLength = 4;
    }

    return dateStr?.replace(/\D/g, '').replace(/^0+/, '').substring(0, maxAllowedLength);
};

const validateFormat = (dateStr: string, valueType: TDatePickerMode): boolean => {
    const {year, month, day, hour, minute} = convertToDateValue(dateStr);
    const lastDayOfMonth = new Date(year, month, 0).getDate();

    const isValidYear = year > 999;
    const isValidMonth = month > 0 && month < 13;
    const isValidDate = day > 0 && day <= lastDayOfMonth;
    const isValidHour = hour === null || (hour >= 0 && hour <= 23);
    const isValidMinute = minute === null || (minute >= 0 && minute <= 59);

    if (valueType === 'date-time') {
        return isValidYear && isValidMonth && isValidDate && isValidHour && isValidMinute;
    } else if (valueType === 'date') {
        return isValidYear && isValidMonth && isValidDate;
    } else if (valueType === 'month') {
        return isValidYear && isValidMonth;
    } else if (valueType === 'year') {
        return isValidYear;
    }
    return false;
};

const validDateRange = (dateStr: string, valueType: TDatePickerMode, dateRange: TDatePickerBounds): boolean => {
    const numTypeTargetDate = Number(dateStr);

    const sanitizedOpenFrom = sanitizeDateInput(dateRange.openFrom, valueType);
    const sanitizedOpenTo = sanitizeDateInput(dateRange.openTo, valueType);

    if (sanitizedOpenFrom && sanitizedOpenTo) {
        return numTypeTargetDate >= Number(sanitizedOpenFrom) && numTypeTargetDate <= Number(sanitizedOpenTo);
    }
    if (sanitizedOpenFrom) {
        return Number(sanitizedOpenFrom) <= numTypeTargetDate;
    }
    if (sanitizedOpenTo) {
        return Number(sanitizedOpenTo) >= numTypeTargetDate;
    }

    return true;
};

const currentDateValue = (): TDateValue => {
    const now: Date = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
    };
};

const generateTimeOptions = (): string[] => {
    const options: string[] = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const pad = (num: number) => String(num).padStart(2, '0');
            options.push(`${pad(hour)}:${pad(minute)}`);
        }
    }
    return options;
};

export default {
    convertToDateValue,
    convertToDateString,
    addDateSeparator,
    sanitizeDateInput,
    validateDateFormat: validateFormat,
    validateDateRange: validDateRange,
    currentDateValue,
    generateTimeOptions,
};
