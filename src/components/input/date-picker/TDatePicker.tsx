'use client';

import type {CSSProperties, MouseEvent} from 'react';
import {useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';

import useValidator from '@/common/hook/UseValidator';
import type {
    TDatePickerBounds,
    TDatePickerMode,
    TDatePickerProps,
    TDateValue,
    TDropHolderRef,
    TTextFieldRef,
} from '@/components';
import {TTextField} from '../text-field';

import themeToken from '~style/designToken/ThemeToken.module.scss';

import TDropHolder from '~/data-container/drop-holder/TDropHolder';
import {TIcon} from '~/icon';
import TDaySelector from '~/input/date-picker/selector/TDaySelector';
import TMonthSelector from '~/input/date-picker/selector/TMonthSelector';
import TYearSelector from '~/input/date-picker/selector/TYearSelector';
import TDateContext from '~/input/date-picker/TDatePickerContext';
import TDatePickerHelpers from '~/input/date-picker/TDatePickerHelpers';

const TDatePicker = ({
    value = '',
    valueType = 'date',
    separator = '-',
    rules,
    successMessage,
    className,
    style,
    openFrom,
    openTo,
    disabled,
    onChange,
    ref,
}: TDatePickerProps) => {
    // region [Hooks]

    const rootRef = useRef<HTMLDivElement>(null);
    const textFieldRef = useRef<TTextFieldRef>(null);
    const dropHolderRef = useRef<TDropHolderRef>(null);

    const validator = useValidator(value, rules, successMessage);

    const [currentSelector, setCurrentSelector] = useState<TDatePickerMode>(valueType);
    const [displayValue, setDisplayValue] = useState('');
    const [dateValue, setDateValue] = useState(value);
    const [displayDateObject, setDisplayDateObject] = useState<TDateValue>({
        ...TDatePickerHelpers.currentDateValue(),
    });
    const [dateRange, setDateRange] = useState<TDatePickerBounds>({openFrom: undefined, openTo: undefined});

    useImperativeHandle(ref, () => ({
        focus() {
            rootRef?.current?.focus();
        },
        open() {
            dropHolderRef?.current?.open();
        },
        validate() {
            return validator.validate();
        },
        getDate() {
            return dateValue;
        },
        scrollToComponent(options: ScrollIntoViewOptions = {behavior: 'smooth', block: 'center'}) {
            rootRef?.current?.scrollIntoView(options);
        },
    }));

    // endregion

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (className) {
            clazz.push(className);
        }
        if (disabled) {
            clazz.push('t-date-picker--disabled');
        }

        return clazz.join(' ');
    }, [className, disabled]);

    const rootStyle = useMemo((): CSSProperties => {
        return style ? style : {};
    }, [style]);

    // endregion

    // region [Private]

    const validateDateRange = useCallback(
        (dateStr: string) => {
            return TDatePickerHelpers.validateDateRange(dateStr, currentSelector, dateRange);
        },
        [dateRange, currentSelector]
    );

    const modifyCurrentSelector = useCallback(
        (val: TDatePickerMode) => {
            if (valueType === 'date' || valueType === 'date-time') {
                setCurrentSelector(val);
            } else if (valueType === 'month' && val !== 'date') {
                setCurrentSelector(val);
            }
        },
        [valueType]
    );

    const setDate = useCallback(
        (dateStr: string) => {
            setDisplayValue(dateStr);
            setDateValue(dateStr);

            onChange?.(TDatePickerHelpers.addDateSeparator(dateStr, separator));

            dropHolderRef.current?.close();
        },
        [onChange, separator]
    );

    const clearDate = useCallback(() => {
        setDisplayValue('');
        setDateValue('');

        onChange?.('');
    }, [onChange]);

    const restoreDate = useCallback(() => {
        const isValidDate = TDatePickerHelpers.validateDateFormat(dateValue, currentSelector);
        const isValidRange = validateDateRange(dateValue);

        if (isValidDate && isValidRange) {
            setDisplayValue(dateValue);
        } else {
            clearDate();
        }
    }, [dateValue, currentSelector, validateDateRange, clearDate]);

    const initializeDateRange = useCallback(() => {
        const sanitizedOpenFrom = TDatePickerHelpers.sanitizeDateInput(openFrom, valueType);
        const sanitizedOpenTo = TDatePickerHelpers.sanitizeDateInput(openTo, valueType);

        const isValidOpenFrom =
            !sanitizedOpenFrom || TDatePickerHelpers.validateDateFormat(sanitizedOpenFrom, currentSelector);
        const isValidOpenTo =
            !sanitizedOpenTo || TDatePickerHelpers.validateDateFormat(sanitizedOpenTo, currentSelector);

        if (!isValidOpenFrom || !isValidOpenTo) {
            throw Error(`Error: Invalid date range value. openFrom: ${sanitizedOpenFrom}, openTo: ${sanitizedOpenTo}`);
        }

        setDateRange({openFrom: sanitizedOpenFrom, openTo: sanitizedOpenTo});
    }, [openFrom, valueType, openTo, currentSelector]);

    const initializeDisplayDate = useCallback((): void => {
        setCurrentSelector(valueType);
        const {year, month} = TDatePickerHelpers.convertToDateValue(dateValue);

        if (year !== 0 && month !== 0) {
            setDisplayDateObject({year, month, day: null});
        } else if (dateRange.openFrom && dateRange.openTo) {
            const {year: openFromYear, month: openFromMonth} = TDatePickerHelpers.convertToDateValue(
                dateRange.openFrom
            );
            setDisplayDateObject({year: openFromYear, month: openFromMonth, day: null});
        } else if (dateRange.openFrom && !dateRange.openTo) {
            const {year: openFromYear, month: openFromMonth} = TDatePickerHelpers.convertToDateValue(
                dateRange.openFrom
            );
            setDisplayDateObject({year: openFromYear, month: openFromMonth, day: null});
        } else if (!dateRange.openFrom && dateRange.openTo) {
            const {year: openToYear, month: openToMonth} = TDatePickerHelpers.convertToDateValue(dateRange.openTo);
            setDisplayDateObject({year: openToYear, month: openToMonth, day: null});
        } else if (year !== 0 && month === 0) {
            setDisplayDateObject((prev) => ({...prev, year, month: 1}));
        } else {
            setDisplayDateObject(TDatePickerHelpers.currentDateValue());
        }
    }, [dateValue, dateRange, valueType]);

    const updateDateValueIfValid = useCallback(
        (dateStr: string = displayValue) => {
            const sanitizedDate: string = TDatePickerHelpers.sanitizeDateInput(dateStr, valueType);

            if (!sanitizedDate) {
                clearDate();
                return;
            }

            const isValidDate: boolean = TDatePickerHelpers.validateDateFormat(sanitizedDate, currentSelector);
            const isValidRange: boolean = validateDateRange(sanitizedDate);

            const {year, month, day, hour, minute} = TDatePickerHelpers.convertToDateValue(sanitizedDate);
            const formattedDateStr: string = TDatePickerHelpers.convertToDateString({year, month, day});

            if (isValidDate && isValidRange) {
                switch (currentSelector) {
                    case 'date': {
                        setDate(formattedDateStr);
                        break;
                    }
                    case 'date-time': {
                        const formattedDateTimeStr = TDatePickerHelpers.convertToDateString({year, month, day, hour, minute});
                        setDate(formattedDateTimeStr);
                        break;
                    }
                    case 'month': {
                        setDate(formattedDateStr.substring(0, 6));
                        break;
                    }
                    case 'year': {
                        setDate(year.toString());
                        break;
                    }
                    default: {
                        restoreDate();
                        break;
                    }
                }
            } else {
                restoreDate();
            }
        },
        [displayValue, valueType, currentSelector, validateDateRange, clearDate, setDate, restoreDate]
    );

    // endregion

    // region [Events]

    const onChangeDisplayDateValue = useCallback(
        (dateStr: string) => {
            const sanitizeDate = TDatePickerHelpers.sanitizeDateInput(dateStr, valueType);
            setDisplayValue(sanitizeDate);
        },
        [valueType]
    );

    const onBlurTextField = useCallback(() => {
        updateDateValueIfValid();
    }, [updateDateValueIfValid]);

    const onClickDropHolder = useCallback((e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    // endregion

    // region [Effects]

    useEffect(() => {
        updateDateValueIfValid(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    useEffect(() => {
        initializeDateRange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openFrom, openTo]);

    useEffect(() => {
        initializeDisplayDate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue]);

    // endregion

    // region [Templates]

    return (
        <div ref={rootRef} className={`t-date-picker ${rootClass}`} style={rootStyle} data-testid={'t-date-picker'}>
            <TTextField
                ref={textFieldRef}
                className={'t-date-picker__text-field'}
                value={TDatePickerHelpers.addDateSeparator(displayValue, separator)}
                onChange={onChangeDisplayDateValue}
                onBlur={onBlurTextField}
                width={'156px'}
                disabled={disabled}
                customAction={
                    <TDropHolder
                        ref={dropHolderRef}
                        className={'t-date-picker__drop-holder'}
                        alignment={'bottom-center'}
                        offset={'16px'}
                        customItem={
                            !disabled && (
                                <TDateContext.Provider
                                    value={{
                                        dateValue,
                                        onChangeValue: updateDateValueIfValid,
                                        displayDateObject,
                                        setDisplayDateObject,
                                        viewMode: {current: currentSelector, original: valueType},
                                        changeViewMode: modifyCurrentSelector,
                                        dateRange,
                                        validDateRange: validateDateRange,
                                        nowDate: TDatePickerHelpers.currentDateValue,
                                        parseDateString: TDatePickerHelpers.convertToDateValue,
                                        parseDateObject: TDatePickerHelpers.convertToDateString,
                                    }}
                                >
                                    <div
                                        className={'t-date-picker__drop-holder__item__wrapper'}
                                        onClick={onClickDropHolder}
                                    >
                                        {currentSelector === 'date' && <TDaySelector />}
                                        {currentSelector === 'date-time' && <TDaySelector />}
                                        {currentSelector === 'month' && <TMonthSelector />}
                                        {currentSelector === 'year' && <TYearSelector />}
                                    </div>
                                </TDateContext.Provider>
                            )
                        }
                    >
                        <TIcon medium onClick={initializeDisplayDate} color={themeToken.tGrayColor3}>
                            calendar_month
                        </TIcon>
                    </TDropHolder>
                }
            />
        </div>
    );
    // endregion
};

TDatePicker.displayName = 'TDatePicker';

export default TDatePicker;
