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


const TDatePicker = forwardRef((props: TDatePickerProps, ref: Ref<TDatePickerRef>) => {

    // region [Hooks]

    const rootRef = useRef<HTMLDivElement>(null);
    const textFieldRef = useRef<TTextFieldRef>(null);
    const dropDownRef = useRef<TDropHolderRef>(null);

    const validator = useValidator(props.value, props.rules, props.successMessage);

    const [viewMode, setViewMode] = useState<TDatePickerViewType>(props.view);
    const [displayValue, setDisplayValue] = useState('');
    const [dateValue, setDateValue] = useState(props.value);
    const [dateRange, setDateRange] = useState<TDateRange>({openFrom: undefined, openTo: undefined});

    // const [status, setStatus] = useState('uncheck');

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
        if (props.readOnly) { clazz.push('t-date-picker--read-only'); }

        return clazz.join(' ');
    }, [props.className, props.disabled, props.readOnly]);

    const rootStyle = useMemo((): CSSProperties => {

        return props.style ? props.style : {};
    }, [props.style]);


    // endregion


    // region [Private]

    const getOnlyNumDateStr = useCallback((dateStr: string) => {
        return dateStr?.replace(/\D/g, '')
            .replace(/^0+/, '').substring(0, 8);
    }, []);

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
        const {openTo, openFrom} = dateRange;

        if (openFrom && openTo) { return numTypeTargetDate >= Number(openFrom) && numTypeTargetDate <= Number(openTo); }
        if (openFrom) { return numTypeTargetDate >= Number(openFrom); }
        if (openTo) { return numTypeTargetDate <= Number(openTo); }

        return true;
    }, [dateRange]);

    const changeViewMode = useCallback((mode: TDatePickerViewType) => {
        setViewMode(mode);
    }, []);

    const setDate = useCallback((dateStr: string) => {
        setDisplayValue(dateStr);
        setDateValue(dateStr);

        if (props.onChange) { props.onChange(dateStr); }

        dropDownRef.current?.close();
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

        if (viewMode === 'date') {
            if (isValidDate && isValidRange) {
                setDisplayValue(dateValue);
            } else { clearDate(); }
        } else if (viewMode === 'month') {
            if (isValidDate && isValidRange) {
                setDisplayValue(dateValue);
            } else { clearDate(); }
        } else if (viewMode === 'year') {
            if (isValidDate && isValidRange) {
                setDisplayValue(dateValue);
            } else { clearDate(); }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue, viewMode]);

    const initializeFromToDate = useCallback(() => {

        const openFrom = getOnlyNumDateStr(props.openFrom);
        const openTo = getOnlyNumDateStr(props.openTo);

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

    // endregion


    // region [Events]

    const onChangeDisplayValue = useCallback((dateStr: string) => {
        const onlyNumDate = getOnlyNumDateStr(dateStr);
        setDisplayValue(onlyNumDate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDateValueChange = useCallback((dateStr = displayValue) => {

        if (dateStr.trim() === '') {
            clearDate();
            return;
        }

        const isDateValid = validateDateFormat(dateStr);
        const isRangeValid = validDateRange(dateStr);

        const {year, month, day} = parseDateString(dateStr);
        const formattedDateStr = parseDateObject({year, month, day});

        if (isDateValid && isRangeValid && viewMode === 'date') {
            setDate(formattedDateStr);
        } else if (isDateValid && isRangeValid && viewMode === 'month') {
            const yearMonthStr = formattedDateStr.substring(0, 6);
            setDate(yearMonthStr);
        } else if (isDateValid && isRangeValid && viewMode === 'year') {
            setDate(year.toString());
        } else {
            restoreDate();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayValue]);

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

    // endregion

    // region [Templates]

    return (
        <div ref={rootRef} className={`t-date-picker ${rootClass}`} style={rootStyle} data-testid={'t-date-picker'}>
            <TTextField ref={textFieldRef}
                        className={'t-date-picker__text-field'}
                        value={displayValue}
                        onChange={onChangeDisplayValue}
                        onBlur={onBlurTextField}
                        width={'156px'}
                        customAction={
                            <TDropHolder
                                ref={dropDownRef}
                                className={'t-date-picker__drop-holder'}
                                alignment={'bottom-center'}
                                offset={'16px'}
                                customItem={
                                    <TDateContext.Provider value={{
                                        dateValue,
                                        handleDateValueChange,
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
                                    </TDateContext.Provider>
                                }>
                                <TIcon medium color={themeToken.tGrayColor3}>calendar_month</TIcon>
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
};

TDatePicker.displayName = 'TDatePicker';


export default TDatePicker;
