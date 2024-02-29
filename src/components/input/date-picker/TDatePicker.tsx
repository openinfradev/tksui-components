import {CSSProperties, forwardRef, MouseEvent, Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {TDateLimit, TDatePickerProps, TDatePickerRef, TDatePickerValueType, TDateValue, TDropHolderRef} from '@/components';
import useValidator from '@/common/hook/UseValidator';
import {TTextField, TTextFieldRef} from '../text-field';
import {TIcon} from '~/icon';
import TDropHolder from '~/data-container/drop-holder/TDropHolder';
import TDaySelector from '~/input/date-picker/selector/TDaySelector';
import TMonthSelector from '~/input/date-picker/selector/TMonthSelector';
import TYearSelector from '~/input/date-picker/selector/TYearSelector';
import themeToken from '~style//designToken/ThemeToken.module.scss';
import TDateContext from '~/input/date-picker/TDatePickerContext';
import TDatePickerHelpers from '~/input/date-picker/TDatePickerHelpers';

const currentDateValue = (): TDateValue => {
    const now: Date = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
    };
};


const TDatePicker = forwardRef((props: TDatePickerProps, ref: Ref<TDatePickerRef>) => {

    // region [Hooks]

    const rootRef = useRef<HTMLDivElement>(null);
    const textFieldRef = useRef<TTextFieldRef>(null);
    const dropHolderRef = useRef<TDropHolderRef>(null);

    const validator = useValidator(props.value, props.rules, props.successMessage);

    const [valueType, setValueType] = useState<TDatePickerValueType>(props.valueType);
    const [displayValue, setDisplayValue] = useState('');
    const [dateValue, setDateValue] = useState(props.value);
    const [displayDateObject, setDisplayDateObject] = useState<TDateValue>({
        ...currentDateValue(),
    });
    const [dateRange, setDateRange] = useState<TDateLimit>({openFrom: undefined, openTo: undefined});

    useImperativeHandle(ref, () => ({
        focus() { rootRef?.current?.focus(); },
        open() { dropHolderRef?.current?.open(); },
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


    const validateDateFormat = useCallback((dateStr: string): boolean => {

        const {year, month, day} = TDatePickerHelpers.convertToDateValue(dateStr);
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
    }, [valueType]);


    const validDateRange = useCallback((dateStr: string) => {

        const numTypeTargetDate = Number(dateStr);

        const sanitizedOpenFrom = TDatePickerHelpers.sanitizeDateInput(dateRange.openFrom, props.valueType);
        const sanitizedOpenTo = TDatePickerHelpers.sanitizeDateInput(dateRange.openTo, props.valueType);

        if (sanitizedOpenFrom && sanitizedOpenTo) {
            return numTypeTargetDate >= Number(sanitizedOpenFrom) && numTypeTargetDate <= Number(sanitizedOpenTo);
        }
        if (sanitizedOpenFrom) { return Number(sanitizedOpenFrom) <= numTypeTargetDate; }
        if (sanitizedOpenTo) { return Number(sanitizedOpenTo) >= numTypeTargetDate; }

        return true;
    }, [dateRange, TDatePickerHelpers.sanitizeDateInput]);


    const modifyViewMode = useCallback((vt: TDatePickerValueType) => {
        if (props.valueType === 'date') {
            setValueType(vt);
        } else if (props.valueType === 'month' && vt !== 'date') {
            setValueType(vt);
        }
    }, [props.valueType]);


    const setDate = useCallback((dateStr: string) => {

        setDisplayValue(dateStr);
        setDateValue(dateStr);

        if (props.onChange) { props.onChange(TDatePickerHelpers.formattedDate(dateStr, props.separator)); }

        dropHolderRef.current?.close();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onChange]);


    const clearDate = useCallback(() => {

        setDisplayValue('');
        setDateValue('');

        if (props.onChange) { props.onChange(''); }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onChange]);


    const restoreDate = useCallback(() => {

        const isValidDate = validateDateFormat(dateValue);
        const isValidRange = validDateRange(dateValue);

        if (valueType === 'date') {
            if (isValidDate && isValidRange) {
                setDisplayValue(dateValue);
            } else { clearDate(); }
        } else if (valueType === 'month') {
            if (isValidDate && isValidRange) {
                setDisplayValue(dateValue);
            } else { clearDate(); }
        } else if (valueType === 'year') {
            if (isValidDate && isValidRange) {
                setDisplayValue(dateValue);
            } else { clearDate(); }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue, valueType]);


    const initializeFromToDate = useCallback(() => {

        const openFrom = TDatePickerHelpers.sanitizeDateInput(props.openFrom, props.valueType);
        const openTo = TDatePickerHelpers.sanitizeDateInput(props.openTo, props.valueType);

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

        setValueType(props.valueType);
        const {year, month} = TDatePickerHelpers.convertToDateValue(dateValue);

        if (year !== 0 && month !== 0) {
            setDisplayDateObject({year, month, day: null});
        } else if (dateRange.openFrom && dateRange.openTo) {

            const {year: openFromYear, month: openFromMonth} = TDatePickerHelpers.convertToDateValue(dateRange.openFrom);
            setDisplayDateObject({year: openFromYear, month: openFromMonth, day: null});
        } else if (dateRange.openFrom && !dateRange.openTo) {

            const {year: openFromYear, month: openFromMonth} = TDatePickerHelpers.convertToDateValue(dateRange.openFrom);
            setDisplayDateObject({year: openFromYear, month: openFromMonth, day: null});
        } else if (!dateRange.openFrom && dateRange.openTo) {

            const {year: openToYear, month: openToMonth} = TDatePickerHelpers.convertToDateValue(dateRange.openTo);
            setDisplayDateObject({year: openToYear, month: openToMonth, day: null});
        } else if (year !== 0 && month === 0) {

            setDisplayDateObject((prev) => ({...prev, year, month: 1}));
        } else { setDisplayDateObject(currentDateValue()); }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue, dateRange, props.valueType]);


    const handleDateValueChange = useCallback((dateStr = displayValue) => {

        const sanitizeDate = TDatePickerHelpers.sanitizeDateInput(dateStr, props.valueType);

        if (sanitizeDate === '') {
            clearDate();
            return;
        }

        const isDateValid = validateDateFormat(sanitizeDate);
        const isRangeValid = validDateRange(sanitizeDate);

        const {year, month, day} = TDatePickerHelpers.convertToDateValue(sanitizeDate);
        const formattedDateStr = TDatePickerHelpers.convertToDateString({year, month, day});

        if (isDateValid && isRangeValid && valueType === 'date') {
            setDate(formattedDateStr);
        } else if (isDateValid && isRangeValid && valueType === 'month') {
            const yearMonthStr = formattedDateStr.substring(0, 6);
            setDate(yearMonthStr);
        } else if (isDateValid && isRangeValid && valueType === 'year') {
            setDate(year.toString());
        } else { restoreDate(); }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayValue, dateRange, displayDateObject, validDateRange, validateDateFormat]);
    // endregion


    // region [Events]

    const onChangeDisplayDateValue = useCallback((dateStr: string) => {
        const sanitizeDate = TDatePickerHelpers.sanitizeDateInput(dateStr, props.valueType);
        setDisplayValue(sanitizeDate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


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
                value={TDatePickerHelpers.formattedDate(displayValue, props.separator)}
                onChange={onChangeDisplayDateValue}
                onBlur={onBlurTextField}
                width={'156px'}
                disabled={props.disabled}
                customAction={
                    <TDropHolder
                        ref={dropHolderRef}
                        className={'t-date-picker__drop-holder'}
                        alignment={'bottom-center'}
                        offset={'16px'}
                        customItem={
                            !props.disabled && (
                                <TDateContext.Provider value={{
                                    nowDate: currentDateValue,
                                    dateValue,
                                    onChangeValue: handleDateValueChange,
                                    displayDateObject,
                                    setDisplayDateObject,
                                    viewMode: {current: valueType, original: props.valueType},
                                    changeViewMode: modifyViewMode,
                                    dateRange,
                                    validDateRange,
                                    parseDateString: TDatePickerHelpers.convertToDateValue,
                                    parseDateObject: TDatePickerHelpers.convertToDateString,
                                }}>
                                    <div className={'t-date-picker__drop-holder__item__wrapper'} onClick={onClickSelector}>
                                        {valueType === 'date' && (<TDaySelector/>)}
                                        {valueType === 'month' && (<TMonthSelector/>)}
                                        {valueType === 'year' && (<TYearSelector/>)}
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
    valueType: 'date',
    separator: '-',
};
TDatePicker.displayName = 'TDatePicker';

export default TDatePicker;
