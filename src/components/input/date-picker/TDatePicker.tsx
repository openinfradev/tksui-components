import {CSSProperties, forwardRef, MouseEvent, Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {TDatePickerProps, TDatePickerRef, TDateValue} from './TDatePicker.interface';
import useValidator from '@/common/hook/UseValidator';
import {TTextField} from '../text-field';
import {TIcon} from '~/icon';
import TDropHolder from '~/data-container/drop-holder/TDropHolder';
import TDaySelector from '~/input/date-picker/selector/TDaySelector';
import themeToken from '~style//designToken/ThemeToken.module.scss';
import {TDropHolderRef} from '@/components';


const TDatePicker = forwardRef((props: TDatePickerProps, ref: Ref<TDatePickerRef>) => {

    // region [Hooks]

    const validator = useValidator(props.value, props.rules, props.successMessage);
    const rootRef = useRef<HTMLDivElement>(null);
    const dropDownRef = useRef<TDropHolderRef>(null);

    const [dateValue, setDateValue] = useState(props.value || '');

    // const [status, setStatus] = useState('uncheck');

    useImperativeHandle(ref, () => ({
        focus() { rootRef?.current?.focus(); },
        validate() { return validator.validate(); },
        open() { dropDownRef?.current?.open(); },
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

    const formatDateToString = useCallback((dateInfo: TDateValue): string => {

        const {year, month, date} = dateInfo;

        if (month === null && date === null) {
            return `${year}`;
        }

        const formattedMonth = month < 10 ? `0${month}` : `${month}`;

        if (month !== null && date === null) {
            return `${year}${month}`;
        }

        const formattedDate = date < 10 ? `0${date}` : `${date}`;

        if (month !== null && date !== null) {
            return `${year}${formattedMonth}${formattedDate}`;
        }
    }, []);

    const stringToDateObject = useCallback((date: string) => {
        const yearPart = date.substring(0, 4);
        const monthPart = date.substring(4, 6);
        const datePart = date.substring(6, 8);

        return {year: yearPart, month: monthPart, date: datePart};
    }, []);

    // endregion


    // region [Events]

    const onChangeFormatAndDate = useCallback((changedDate: string) => {

        const numStr = changedDate.replace(/\D/g, '').substring(0, 8);

        if (numStr.length < 6) {

            setDateValue(numStr);
        } else if (numStr.length < 7) {

            const {year, month} = stringToDateObject(numStr);

            const monthNum = Number(month);
            const formattedMonth = monthNum === 0 ? '01' : monthNum > 12 ? '12' : month;

            setDateValue(`${year}${formattedMonth}`);
        } else {

            const {year, month, date} = stringToDateObject(numStr);

            const monthNum = Number(month);
            const formattedMonth = monthNum === 0 ? '01' : monthNum > 12 ? '12' : month;

            const lastDayOfMonth = (new Date(Number(year), Number(month), 0)).getDate();
            const formattedDate = date === '00' ? '01' : Number(date) > lastDayOfMonth ? lastDayOfMonth : date;

            setDateValue(`${year}${formattedMonth}${formattedDate}`);
        }
    }, [props.onChange]);

    const onChangeDaySelector = useCallback((dateInfo: TDateValue) => {
        const formattedDate = formatDateToString(dateInfo);

        setDateValue(formattedDate);
        dropDownRef.current?.close();
    }, [dateValue]);

    const onClickSelector = useCallback((e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    // const onChangeMonthSelector = useCallback((date) => {
    //     setDate(date);
    // }, []);
    //
    // const onChangeYearSelector = useCallback((date) => {
    //     setDate(date);
    // }, []);


    // endregion

    // region [Effects]

    useEffect(() => {
        if (props.onChange) props.onChange(dateValue);
    }, [dateValue]);

    // endregion

    // region [Templates]

    return (
        <div ref={rootRef} className={`t-date-picker ${rootClass}`} style={rootStyle}>
            <TTextField className={'t-date-picker__text-field'} value={dateValue} onChange={onChangeFormatAndDate} width={'156px'}/>
            <TDropHolder
                ref={dropDownRef}
                className={'t-date-picker__drop-holder'}
                alignment={'bottom-center'}
                offset={'16px'}
                customItem={
                    <div className={'t-date-picker__drop-holder__item__wrapper'} onClick={onClickSelector}>
                        {
                            props.view === 'date' && (
                                <TDaySelector value={dateValue} onChange={onChangeDaySelector}/>
                            )
                        }
                        {/* { */}
                        {/*     props.view === 'month' && ( */}
                        {/*         <TMonthSelector value={date} onChange={onChangeDaySelector} */}
                        {/*     ) */}
                        {/* } */}
                        {/* { */}
                        {/*     props.view === 'year' && ( */}
                        {/*         <TYearSelector value={date} onChange={onChangeDaySelector} /> */}
                        {/*     ) */}
                        {/* } */}
                    </div>
                }>
                <TIcon medium color={themeToken.tGrayColor3}>calendar_month</TIcon>
            </TDropHolder>
        </div>
    );

    // endregion


});

TDatePicker.defaultProps = {
    view: 'date',
};

TDatePicker.displayName = 'TDatePicker';


export default TDatePicker;
