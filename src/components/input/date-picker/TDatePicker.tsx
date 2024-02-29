import {CSSProperties, forwardRef, MouseEvent, Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {TDatePickerBounds, TDatePickerProps, TDatePickerRef, TDatePickerMode, TDateValue, TDropHolderRef} from '@/components';
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


const TDatePicker = forwardRef((props: TDatePickerProps, ref: Ref<TDatePickerRef>) => {

    // region [Hooks]

    const rootRef = useRef<HTMLDivElement>(null);
    const textFieldRef = useRef<TTextFieldRef>(null);
    const dropHolderRef = useRef<TDropHolderRef>(null);

    const validator = useValidator(props.value, props.rules, props.successMessage);

    const [currentSelector, setCurrentSelector] = useState<TDatePickerMode>(props.valueType);
    const [displayValue, setDisplayValue] = useState('');
    const [dateValue, setDateValue] = useState(props.value);
    const [displayDateObject, setDisplayDateObject] = useState<TDateValue>({...TDatePickerHelpers.currentDateValue()});
    const [dateRange, setDateRange] = useState<TDatePickerBounds>({openFrom: undefined, openTo: undefined});

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


    const validateDateRange = useCallback((dateStr: string) => {

        return TDatePickerHelpers.validateDateRange(dateStr, currentSelector, dateRange);

    }, [dateRange, currentSelector]);


    const modifyCurrentSelector = useCallback((value: TDatePickerMode) => {

        if (props.valueType === 'date') {
            setCurrentSelector(value);
        } else if (props.valueType === 'month' && value !== 'date') {
            setCurrentSelector(value);
        }
    }, [props.valueType]);


    const setDate = useCallback((dateStr: string) => {

        setDisplayValue(dateStr);
        setDateValue(dateStr);

        props.onChange?.(TDatePickerHelpers.addDateSeparator(dateStr, props.separator));

        dropHolderRef.current?.close();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onChange]);


    const clearDate = useCallback(() => {

        setDisplayValue('');
        setDateValue('');

        props.onChange?.('');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onChange]);


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
        const openFrom = TDatePickerHelpers.sanitizeDateInput(props.openFrom, props.valueType);
        const openTo = TDatePickerHelpers.sanitizeDateInput(props.openTo, props.valueType);

        const isValidOpenFrom = !openFrom || TDatePickerHelpers.validateDateFormat(openFrom, currentSelector);
        const isValidOpenTo = !openTo || TDatePickerHelpers.validateDateFormat(openTo, currentSelector);

        if (!isValidOpenFrom || !isValidOpenTo) {
            throw Error(`Error: Invalid date range value. openFrom: ${openFrom}, openTo: ${openTo}`);
        }

        setDateRange({openFrom, openTo});
    }, [props.openFrom, props.openTo, props.valueType, currentSelector]);


    const initializeDisplayDate = useCallback((): void => {

        setCurrentSelector(props.valueType);
        const {year, month} = TDatePickerHelpers.convertToDateValue(dateValue);

        if (year !== 0 && month !== 0) {
            setDisplayDateObject({year, month, day: null});
        } else if (dateRange.openFrom && dateRange.openTo) {

            const {
                year: openFromYear,
                month: openFromMonth,
            } = TDatePickerHelpers.convertToDateValue(dateRange.openFrom);
            setDisplayDateObject({year: openFromYear, month: openFromMonth, day: null});
        } else if (dateRange.openFrom && !dateRange.openTo) {

            const {
                year: openFromYear,
                month: openFromMonth,
            } = TDatePickerHelpers.convertToDateValue(dateRange.openFrom);
            setDisplayDateObject({year: openFromYear, month: openFromMonth, day: null});
        } else if (!dateRange.openFrom && dateRange.openTo) {

            const {year: openToYear, month: openToMonth} = TDatePickerHelpers.convertToDateValue(dateRange.openTo);
            setDisplayDateObject({year: openToYear, month: openToMonth, day: null});
        } else if (year !== 0 && month === 0) {

            setDisplayDateObject((prev) => ({...prev, year, month: 1}));
        } else {
            setDisplayDateObject(TDatePickerHelpers.currentDateValue());
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue, dateRange, props.valueType]);

    const updateDateValueIfValid = useCallback((dateStr: string = displayValue) => {
        const sanitizedDate: string = TDatePickerHelpers.sanitizeDateInput(dateStr, props.valueType);

        if (!sanitizedDate) {
            clearDate();
            return;
        }

        const isValidDate: boolean = TDatePickerHelpers.validateDateFormat(sanitizedDate, currentSelector);
        const isValidRange: boolean = validateDateRange(sanitizedDate);

        const {year, month, day} = TDatePickerHelpers.convertToDateValue(sanitizedDate);
        const formattedDateStr: string = TDatePickerHelpers.convertToDateString({year, month, day});

        if (isValidDate && isValidRange) {
            switch (currentSelector) {
                case 'date': {
                    setDate(formattedDateStr);
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
    }, [displayValue, props.valueType, currentSelector, validateDateRange, clearDate, setDate, restoreDate]);

    // endregion


    // region [Events]

    const onChangeDisplayDateValue = useCallback((dateStr: string) => {
        const sanitizeDate = TDatePickerHelpers.sanitizeDateInput(dateStr, props.valueType);
        setDisplayValue(sanitizeDate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onBlurTextField = useCallback(() => {
        updateDateValueIfValid();
    }, [updateDateValueIfValid]);

    const onClickDropHolder = useCallback((e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    // endregion


    // region [Effects]

    useEffect(() => {
        updateDateValueIfValid(props.value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.value]);

    useEffect(() => {
        initializeDateRange();
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
                value={TDatePickerHelpers.addDateSeparator(displayValue, props.separator)}
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
                                    dateValue,
                                    onChangeValue: updateDateValueIfValid,
                                    displayDateObject,
                                    setDisplayDateObject,
                                    viewMode: {current: currentSelector, original: props.valueType},
                                    changeViewMode: modifyCurrentSelector,
                                    dateRange,
                                    validDateRange: validateDateRange,
                                    nowDate: TDatePickerHelpers.currentDateValue,
                                    parseDateString: TDatePickerHelpers.convertToDateValue,
                                    parseDateObject: TDatePickerHelpers.convertToDateString,
                                }}>
                                    <div className={'t-date-picker__drop-holder__item__wrapper'} onClick={onClickDropHolder}>
                                        {currentSelector === 'date' && (<TDaySelector/>)}
                                        {currentSelector === 'month' && (<TMonthSelector/>)}
                                        {currentSelector === 'year' && (<TYearSelector/>)}
                                    </div>
                                </TDateContext.Provider>)
                        }>
                        <TIcon medium onClick={initializeDisplayDate}
                               color={themeToken.tGrayColor3}>calendar_month</TIcon>
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
