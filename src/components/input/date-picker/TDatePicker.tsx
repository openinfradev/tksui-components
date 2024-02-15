import {CSSProperties, forwardRef, MouseEvent, Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {TDatePickerProps, TDatePickerRef, TDatePickerViewType, TDateRange, TDateValue} from './TDatePicker.interface';
import useValidator from '@/common/hook/UseValidator';
import {TTextField, TTextFieldRef} from '../text-field';
import {TIcon} from '~/icon';
import TDropHolder from '~/data-container/drop-holder/TDropHolder';
import TDaySelector from '~/input/date-picker/selector/TDaySelector';
import TMonthSelector from '~/input/date-picker/selector/TMonthSelector';
import TYearSelector from '~/input/date-picker/selector/TYearSelector';
import themeToken from '~style//designToken/ThemeToken.module.scss';
import {TDropHolderRef} from '@/components';
import TDateContext from '~/input/date-picker/TDateContext';

const nowDate = (): TDateValue => ({
    year: new Date().getFullYear(),
    month: (new Date().getMonth() + 1),
    day: new Date().getDate(),
});


const TDatePicker = forwardRef((props: TDatePickerProps, ref: Ref<TDatePickerRef>) => {

    // region [Hooks]

    const rootRef = useRef<HTMLDivElement>(null);
    const textFieldRef = useRef<TTextFieldRef>(null);
    const dropDownRef = useRef<TDropHolderRef>(null);

    const validator = useValidator(props.value, props.rules, props.successMessage);

    const [viewMode, setViewMode] = useState<TDatePickerViewType>(props.view);
    const [displayDateValue, setDisplayDateValue] = useState('');
    const [dateValue, setDateValue] = useState(props.value);
    const [displayDateObject, setDisplayDateObject] = useState<TDateValue>({
        ...nowDate(),
    });
    const [dateRange, setDateRange] = useState<TDateRange>({openFrom: undefined, openTo: undefined});

    useImperativeHandle(ref, () => ({
        focus() { rootRef?.current?.focus(); },
        open() { dropDownRef?.current?.open(); },
        validate() { return validator.validate(); },
        getDate() { return dateValue; },
    }));

    // endregion


    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.disabled) { clazz.push('t-date-picker--disabled'); }

        return clazz.join(' ');
    }, [props.className, props.disabled]);

    const rootStyle = useMemo((): CSSProperties => {

        return props.style ? props.style : {};
    }, [props.style]);


    // endregion


    // region [Private]

    const formattedDate = useCallback((date: string) => {
        const dateLength = date.length;
        const yearStr = date.substring(0, 4);
        const monthStr = date.substring(4, 6);
        const dayStr = date.substring(6, 8);

        if (dateLength < 5) { return yearStr; }
        if (dateLength < 7) { return `${yearStr}${props.separator}${monthStr}`; }
        return `${yearStr}${props.separator}${monthStr}${props.separator}${dayStr}`;
    }, []);

    // const displayFormattedDate = useMemo((): string => {
    //
    //
    // }, [displayDateValue]);

    const sanitizeDateInput = useCallback((dateStr: string) => {
        let maxAllowedLength = 8;

        if (viewMode === 'month') {
            maxAllowedLength = 6;
        } else if (viewMode === 'year') {
            maxAllowedLength = 4;
        }

        return dateStr?.replace(/\D/g, '')
            .replace(/^0+/, '').substring(0, maxAllowedLength);
    }, [viewMode]);

    const parseDateString = useCallback((date: string) => {
        const yearPart = date?.substring(0, 4);
        const monthPart = date?.substring(4, 6);
        const dayPart = date?.substring(6, 8);

        return {year: Number(yearPart), month: Number(monthPart), day: Number(dayPart)};
    }, []);

    const parseDateObject = useCallback(({year, month, day}: TDateValue): string => {
        const pad = (num: number) => String(num).padStart(2, '0');
        return `${year}${pad(month)}${pad(day)}`;
    }, []);

    const validateDateFormat = useCallback((dateStr: string): boolean => {

        const {year, month, day} = parseDateString(dateStr);
        const lastDayOfMonth = (new Date(year, month, 0)).getDate();

        const isValidYear = year > 999;
        const isValidMonth = (month > 0 && month < 13);
        const isValidDate = (day > 0 && day <= lastDayOfMonth);

        if (viewMode === 'date') {
            if (isValidYear && isValidMonth && isValidDate) { return true; }
        } else if (viewMode === 'month') {
            if (isValidYear && isValidMonth) { return true; }
        } else if (viewMode === 'year') {
            if (isValidYear) { return true; }
        }
        return false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewMode]);

    const validDateRange = useCallback((dateStr: string) => {

        const numTypeTargetDate = Number(dateStr);

        const sanitizedOpenFrom = sanitizeDateInput(dateRange.openFrom);
        const sanitizedOpenTo = sanitizeDateInput(dateRange.openTo);

        if (sanitizedOpenFrom && sanitizedOpenTo) {
            return numTypeTargetDate >= Number(sanitizedOpenFrom) && numTypeTargetDate <= Number(sanitizedOpenTo);
        }
        if (sanitizedOpenFrom) { return Number(sanitizedOpenFrom) <= numTypeTargetDate; }
        if (sanitizedOpenTo) { return Number(sanitizedOpenTo) >= numTypeTargetDate; }

        return true;
    }, [dateRange, sanitizeDateInput]);

    const changeViewMode = useCallback((mode: TDatePickerViewType) => {
        if (props.view === 'date') {
            setViewMode(mode);
        } else if (props.view === 'month' && mode !== 'date') {
            setViewMode(mode);
        }
    }, [props.view]);

    const setDate = useCallback((dateStr: string) => {
        setDisplayDateValue(dateStr);
        setDateValue(dateStr);

        if (props.onChange) { props.onChange(formattedDate(dateStr)); }

        dropDownRef.current?.close();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onChange]);

    const clearDate = useCallback(() => {
        setDisplayDateValue('');
        setDateValue('');

        if (props.onChange) { props.onChange(''); }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onChange]);

    const restoreDate = useCallback(() => {

        const isValidDate = validateDateFormat(dateValue);
        const isValidRange = validDateRange(dateValue);

        if (viewMode === 'date') {
            if (isValidDate && isValidRange) {
                setDisplayDateValue(dateValue);
            } else { clearDate(); }
        } else if (viewMode === 'month') {
            if (isValidDate && isValidRange) {
                setDisplayDateValue(dateValue);
            } else { clearDate(); }
        } else if (viewMode === 'year') {
            if (isValidDate && isValidRange) {
                setDisplayDateValue(dateValue);
            } else { clearDate(); }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue, viewMode]);

    const initializeFromToDate = useCallback(() => {

        const openFrom = sanitizeDateInput(props.openFrom);
        const openTo = sanitizeDateInput(props.openTo);

        const isValidOpenFrom = validateDateFormat(openFrom);
        const isValidOpenTo = validateDateFormat(openTo);

        // openFrom, openTo validation check
        if (openFrom && openTo && !isValidOpenFrom && !isValidOpenTo) {
            throw Error('Error: openFrom and openTo prop invalid value.');
        } else if (openFrom && !openTo && !isValidOpenFrom) {
            throw Error('Error: openFrom prop invalid value.');
        } else if (!openFrom && openTo && !isValidOpenTo) {
            throw Error('Error: openTo prop invalid value.');
        } else {
            setDateRange({
                openFrom: isValidOpenFrom ? openFrom : undefined,
                openTo: isValidOpenTo ? openTo : undefined,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.openFrom, props.openTo]);

    const initializeDisplayDate = useCallback((): void => {

        setViewMode(props.view);
        const {year, month} = parseDateString(dateValue);

        if (year !== 0 && month !== 0) {
            setDisplayDateObject({year, month, day: null});
        } else if (dateRange.openFrom && dateRange.openTo) {

            const {year: openFromYear, month: openFromMonth} = parseDateString(dateRange.openFrom);
            setDisplayDateObject({year: openFromYear, month: openFromMonth, day: null});
        } else if (dateRange.openFrom && !dateRange.openTo) {

            const {year: openFromYear, month: openFromMonth} = parseDateString(dateRange.openFrom);
            setDisplayDateObject({year: openFromYear, month: openFromMonth, day: null});
        } else if (!dateRange.openFrom && dateRange.openTo) {

            const {year: openToYear, month: openToMonth} = parseDateString(dateRange.openTo);
            setDisplayDateObject({year: openToYear, month: openToMonth, day: null});
        } else if (year !== 0 && month === 0) {

            setDisplayDateObject((prev) => ({...prev, year, month: 1}));
        } else { setDisplayDateObject(nowDate()); }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue, dateRange, props.view]);

    // endregion


    // region [Events]

    const onChangeDisplayDateValue = useCallback((dateStr: string) => {
        const sanitizeDate = sanitizeDateInput(dateStr);
        setDisplayDateValue(sanitizeDate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDateValueChange = useCallback((dateStr = displayDateValue) => {

        const sanitizeDate = sanitizeDateInput(dateStr);

        if (sanitizeDate === '') {
            clearDate();
            return;
        }

        const isDateValid = validateDateFormat(sanitizeDate);
        const isRangeValid = validDateRange(sanitizeDate);

        const {year, month, day} = parseDateString(sanitizeDate);
        const formattedDateStr = parseDateObject({year, month, day});

        if (isDateValid && isRangeValid && viewMode === 'date') {
            setDate(formattedDateStr);
        } else if (isDateValid && isRangeValid && viewMode === 'month') {
            const yearMonthStr = formattedDateStr.substring(0, 6);
            setDate(yearMonthStr);
        } else if (isDateValid && isRangeValid && viewMode === 'year') {
            setDate(year.toString());
        } else { restoreDate(); }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayDateValue, dateRange, displayDateObject, validDateRange, validateDateFormat]);


    const onBlurTextField = useCallback(() => {
        handleDateValueChange();
    }, [handleDateValueChange]);

    const onClickSelector = useCallback((e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    // endregion


    // region [Effects]

    useEffect(() => {
        handleDateValueChange(props.value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.value]);

    useEffect(() => {
        initializeFromToDate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.openFrom, props.openTo]);

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
                value={formattedDate(displayDateValue)}
                onChange={onChangeDisplayDateValue}
                onBlur={onBlurTextField}
                width={'156px'}
                disabled={props.disabled}
                customAction={
                    <TDropHolder
                        ref={dropDownRef}
                        className={'t-date-picker__drop-holder'}
                        alignment={'bottom-center'}
                        offset={'16px'}
                        customItem={
                            !props.disabled && (
                                <TDateContext.Provider value={{
                                    nowDate,
                                    dateValue,
                                    handleDateValueChange,
                                    displayDateObject,
                                    setDisplayDateObject,
                                    viewMode: {current: viewMode, original: props.view},
                                    changeViewMode,
                                    dateRange,
                                    validDateRange,
                                    parseDateString,
                                    parseDateObject,
                                }}>
                                    <div className={'t-date-picker__drop-holder__item__wrapper'} onClick={onClickSelector}>
                                        {viewMode === 'date' && (<TDaySelector/>)}
                                        {viewMode === 'month' && (<TMonthSelector/>)}
                                        {viewMode === 'year' && (<TYearSelector/>)}
                                    </div>
                                </TDateContext.Provider>)
                        }>
                        <TIcon medium onClick={initializeDisplayDate} color={themeToken.tGrayColor3}>calendar_month</TIcon>
                    </TDropHolder>
                }
            />
        </div>
    );
    // endregion
});

TDatePicker.defaultProps = {
    value: '',
    view: 'date',
    separator: '-',
};
TDatePicker.displayName = 'TDatePicker';

export default TDatePicker;
