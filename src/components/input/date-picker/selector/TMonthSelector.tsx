import {memo, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import TIcon from '~/icon/TIcon';
import TButton from '~/button/button/TButton';
import themeToken from '~style/designToken/ThemeToken.module.scss';
import {TDateValue} from '~/input/date-picker';
import datePickerConText from '~/input/date-picker/TDateContext';


const nowDate = (): TDateValue => ({
    year: new Date().getFullYear(),
    month: (new Date().getMonth() + 1),
    day: new Date().getDate(),
});

// const DaySpan = ({day}: { day: string }) => (<span className={'t-day-selector__content__weekday__item'}>{day}</span>);
// const MemoizedDaySpan = memo(DaySpan);


const TMonthSelector = () => {

    // region [Hooks]

    const {dateValue, changeViewMode, handleDateValueChange} = useContext(datePickerConText);
    const [displayDateObject, setDisplayDateObject] = useState<TDateValue>({
        ...nowDate(),
    });

    const selectedDateObject = useMemo(() :TDateValue => {

        if (dateValue === '') { return {year: null, month: null, day: null}; }

        const year = Number(dateValue.substring(0, 4));
        const month = Number(dateValue.substring(4, 6));
        const day = Number(dateValue.substring(6, 8));

        if (year !== 0 && month !== 0 && day !== 0) { return {year, month, day}; }

        return {year: null, month: null, day: null};
    }, [dateValue]);

    // endregion


    // region [Styles]

    const dateLabelClass = useCallback(
        (date: number): string => {

            if (displayDateObject.year === selectedDateObject.year && displayDateObject.month === selectedDateObject.month
                && date === selectedDateObject.day) {

                return 't-day-selector__content__day-container__item__day--selected';
            }
            if (displayDateObject.year === nowDate().year && displayDateObject.month === nowDate().month
                && date === nowDate().day) {

                return 't-day-selector__content__day-container__item__day--today';
            }
            return '';
        },
        [selectedDateObject, displayDateObject],
    );

    // endregion


    // region [Privates]

    const initializeDisplayDateInfo = useCallback(() => {

        const year = Number(dateValue.substring(0, 4));
        const month = Number(dateValue.substring(4, 6));
        const date = Number(dateValue.substring(6, 8));

        if (year !== 0 && month !== 0 && date !== 0) {
            // setSelectedDate({year, month, date});
        }

        if (year !== 0 && month !== 0) {
            setDisplayDateObject((prev) => ({...prev, year, month, date: null}));
        } else if (year !== 0 && month === 0) {
            setDisplayDateObject((prev) => ({...prev, year, month: 1}));
        }
    }, [dateValue]);


    const daysInMonth = useMemo(() => {

        const lastDayOfMonth = (new Date(displayDateObject.year, displayDateObject.month, 0)).getDate();
        return Array.from(Array(lastDayOfMonth).keys());
    }, [displayDateObject]);


    const firstDayOfWeek = useMemo((): number => {

        return (new Date(displayDateObject.year, displayDateObject.month - 1).getDay()) + 1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [daysInMonth, displayDateObject]);


    // endregion


    // region [Events]

    const onClickDate = useCallback((clickedDate: number) => {

        const twoDigitMonth = displayDateObject.month > 9 ? displayDateObject.month : `0${displayDateObject.month}`;
        const twoDigitDate = clickedDate > 9 ? clickedDate : `0${clickedDate}`;

        const dateStr = `${displayDateObject.year}${twoDigitMonth}${twoDigitDate}`;


        if (handleDateValueChange) { handleDateValueChange(dateStr); }
    }, [handleDateValueChange, displayDateObject, daysInMonth]);

    const onMoveMonth = useCallback((move: 'next' | 'prev' | 'today') => {

        if (move === 'today') {
            setDisplayDateObject({...nowDate()});
        } else if (move === 'next' || move === 'prev') {
            setDisplayDateObject((prev) => {
                const moveValue = move === 'next' ? 1 : -1;
                const newMonth = (prev.month + moveValue - 1 + 12) % 12 + 1;
                const newYear = prev.year + Math.floor((prev.month + moveValue - 1) / 12);
                return {...prev, month: newMonth, year: newYear};
            });
        } else { throw new Error('Invalid move value'); }
    }, []);

    // endregion


    // region [Effects]

    useEffect(() => { initializeDisplayDateInfo(); }, []);

    // endregion


    // region [Templates]

    return (
        <div className={'t-day-selector'} data-testid={'t-month-selector'}>
            <div className={'t-day-selector__header'}>
                <div className={'t-day-selector__header__current-month'}>
                    <div onClick={() => { changeViewMode('year'); }}>{displayDateObject.year}년</div>
                    <TIcon xsmall>arrow_drop_down</TIcon>
                </div>

                <div className={'t-day-selector__header__control'}>
                    <TButton onClick={() => { onMoveMonth('prev'); }} xsmall
                             className={'t-day-selector__header__control__icon-button'}>
                        <TIcon xsmall color={themeToken.tGrayColor5}>arrow_left</TIcon>
                    </TButton>
                    <TButton onClick={() => { onMoveMonth('next'); }} xsmall
                             className={'t-day-selector__header__control__icon-button'}>
                        <TIcon xsmall color={themeToken.tGrayColor5}>arrow_right</TIcon>
                    </TButton>
                </div>
            </div>

            <div className={'t-day-selector__content'}>
                달
                {/* <div className={'t-day-selector__content__weekday'}> */}
                {/*     {dayList.map((day) => <MemoizedDaySpan key={day} day={day}/>)} */}
                {/* </div> */}

                {/* <div className={'t-day-selector__content__day-container'}> */}
                {/*     { */}
                {/*         daysInMonth.map((a) => ( */}
                {/*             <div key={a} */}
                {/*                  className={'t-day-selector__content__day-container__item'} */}
                {/*                  style={a === 0 ? {gridColumn: firstDayOfWeek} : {}} */}
                {/*                  onClick={() => { onClickDate(a + 1); }} */}
                {/*             > */}
                {/*                 <div className={`t-day-selector__content__day-container__item__day ${dateLabelClass((a + 1))}`}> */}
                {/*                     {a + 1} */}
                {/*                 </div> */}
                {/*             </div> */}
                {/*         )) */}
                {/*     } */}
                {/* </div> */}
            </div>
        </div>
    );

    // endregion
};

TMonthSelector.defaultProps = {
    value: `${nowDate().year}-`,
};

TMonthSelector.displayName = 'TMonthSelector';


export default TMonthSelector;
