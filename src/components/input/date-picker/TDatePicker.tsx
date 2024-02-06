import {CSSProperties, forwardRef, MouseEvent, Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {TDatePickerProps, TDatePickerRef, TDatePickerViewType} from './TDatePicker.interface';
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

    const stringToDateObject = useCallback((date: string) => {
        const yearPart = date.substring(0, 4);
        const monthPart = date.substring(4, 6);
        const datePart = date.substring(6, 8);

        return {year: yearPart, month: monthPart, date: datePart};
    }, []);

    const validateDate = useCallback((dateStr:string): boolean => {

        const {year, month, date} = stringToDateObject(dateStr);
        const lastDayOfMonth = (new Date(Number(year), Number(month), 0)).getDate();

        const isValidYear = Number(year) > 999;
        const isValidMonth = (Number(month) > 0 && Number(month) < 13);
        const isValidDate = (Number(date) > 0 && Number(date) <= lastDayOfMonth);

        if (viewMode === 'date') {
            if (isValidYear && isValidMonth && isValidDate) { return true; }
        } else if (viewMode === 'month') {
            if (isValidYear && isValidMonth) { return true; }
        } else if (viewMode === 'year') {
            if (isValidYear) { return true; }
        }
        return false;

    }, [viewMode]);

    const changeViewMode = useCallback((mode: TDatePickerViewType) => {
        setViewMode(mode);
    }, []);

    const setDate = useCallback((dateStr: string) => {
        setDisplayValue(dateStr);
        setDateValue(dateStr);

        if (props.onChange) { props.onChange(dateStr); }

        dropDownRef.current?.close();
    }, [props.onChange]);

    const clearDate = useCallback(() => {
        setDisplayValue('');
        setDateValue('');

        if (props.onChange) { props.onChange(''); }
    }, [props.onChange]);

    const restoreDate = useCallback(() => {
        const isValidDate = validateDate(dateValue);

        if (viewMode === 'date') {
            if (isValidDate) {
                setDisplayValue(dateValue);
            } else { clearDate(); }
        } else if (viewMode === 'month') {
            if (isValidDate) {
                setDisplayValue(dateValue);
            } else { clearDate(); }
        } else if (viewMode === 'year') {
            if (isValidDate) {
                setDisplayValue(dateValue);
            } else { clearDate(); }
        }
    }, [dateValue]);

    // endregion


    // region [Events]

    const onChangeDisplayValue = useCallback((dateStr: string) => {
        const onlyNumDate = dateStr.replace(/\D/g, '')
            .replace(/^0+/, '').substring(0, 8);
        setDisplayValue(onlyNumDate);
    }, []);

    const handleDateValueChange = useCallback((dateStr = displayValue) => {

        if (dateStr.trim() === '') {
            clearDate();
            return;
        }

        const isDateValid = validateDate(dateStr);

        const {year, month, date} = stringToDateObject(dateStr);

        const twoDigitMonth = Number(month) < 10 ? `0${Number(month)}` : month;
        const twoDigitDate = Number(date) < 10 ? `0${Number(date)}` : date;

        if (isDateValid && viewMode === 'date') {
            const yearMonthDate = `${year}${twoDigitMonth}${twoDigitDate}`;
            setDate(yearMonthDate);
        } else if (isDateValid && viewMode === 'month') {
            const yearMonth = `${year}${twoDigitMonth}`;
            setDate(yearMonth);
        } else if (isDateValid && viewMode === 'year') {
            setDate(year);
        } else {
            restoreDate();
        }

    }, [displayValue, stringToDateObject]);

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
    }, [props.value]);

    // endregion

    // region [Templates]

    return (
        <div ref={rootRef} className={`t-date-picker ${rootClass}`} style={rootStyle} data-testid={'t-date-picker'}>
            <TDropHolder
                ref={dropDownRef}
                className={'t-date-picker__drop-holder'}
                alignment={'bottom-center'}
                offset={'16px'}
                customItem={
                    <TDateContext.Provider value={{dateValue, handleDateValueChange, changeViewMode}}>
                        <div className={'t-date-picker__drop-holder__item__wrapper'} onClick={onClickSelector}>
                            {
                                viewMode === 'date' && (<TDaySelector />)
                            }
                            {
                                viewMode === 'month' && (<TMonthSelector />)
                            }
                            {
                                viewMode === 'year' && (<TYearSelector />)
                            }
                        </div>
                    </TDateContext.Provider>
                }>
                <TIcon medium color={themeToken.tGrayColor3}>calendar_month</TIcon>
            </TDropHolder>
            <TTextField ref={textFieldRef}
                        className={'t-date-picker__text-field'}
                        value={displayValue}
                        onChange={onChangeDisplayValue}
                        onBlur={onBlurTextField}
                        width={'156px'}
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
