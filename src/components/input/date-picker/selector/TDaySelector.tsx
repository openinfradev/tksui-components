import {memo, useCallback, useContext, useMemo} from 'react';
import TIcon from '~/icon/TIcon';
import TButton from '~/button/button/TButton';
import themeToken from '~style/designToken/ThemeToken.module.scss';
import {TDateValue} from '~/input/date-picker';
import datePickerConText from '~/input/date-picker/TDateContext';


const weekList = ['일', '월', '화', '수', '목', '금', '토'];

const DaySpan = ({day}: { day: string }) => (<span className={'t-day-selector__content__weekday__item'}>{day}</span>);
const MemoizedDaySpan = memo(DaySpan);


const TDaySelector = () => {

    // region [Hooks]

    const {
        dateValue, onChangeDateValue, displayDateObject, setDisplayDateObject, changeViewMode,
        nowDate, parseDateString, validDateRange,
    } = useContext(datePickerConText);

    const selectedDateObject = useMemo((): TDateValue => {

        if (dateValue === '') { return {year: null, month: null, day: null}; }

        const {year, month, day} = parseDateString(dateValue);

        if (year !== 0 && month !== 0 && day !== 0) { return {year, month, day}; }

        return {year: null, month: null, day: null};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue]);

    // endregion


    // region [Privates]

    const daysInMonth = useMemo(() => {

        const lastDayOfMonth = (new Date(displayDateObject.year, displayDateObject.month, 0)).getDate();
        return Array.from(Array(lastDayOfMonth).keys());
    }, [displayDateObject]);

    const firstDayOfWeek = useMemo((): number => {

        return (new Date(displayDateObject.year, displayDateObject.month - 1).getDay()) + 1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [daysInMonth, displayDateObject]);

    // endregion


    // region [Styles]

    const dateLabelClass = useCallback(
        (clickedDate: number): string => {

            const clazz = [];
            const {year: displayYear, month: displayMonth} = displayDateObject;
            const {year: selectedYear, month: selectedMonth, day: selectedDay} = selectedDateObject;

            if (displayYear === selectedYear && displayMonth === selectedMonth
                && clickedDate === selectedDay) {
                clazz.push('t-day-selector__content__day-container__item__day--selected');
            }

            if (displayYear === nowDate().year && displayMonth === nowDate().month
                && clickedDate === nowDate().day) {
                clazz.push('t-day-selector__content__day-container__item__day--today');
            }

            const padMonth = String(displayDateObject.month).padStart(2, '0');
            const padDate = String(clickedDate).padStart(2, '0');

            if (!validDateRange(`${displayYear}${padMonth}${padDate}`)) {
                clazz.push('t-day-selector__content__day-container__item__day--disabled');
            }

            return clazz.join(' ');
        },
        [validDateRange, selectedDateObject, displayDateObject, nowDate],
    );

    // endregion


    // region [Events]

    const onClickDate = useCallback((clickedDate: number) => {

        const twoDigitMonth = displayDateObject.month > 9 ? displayDateObject.month : `0${displayDateObject.month}`;
        const twoDigitDate = clickedDate > 9 ? clickedDate : `0${clickedDate}`;

        const dateStr = `${displayDateObject.year}${twoDigitMonth}${twoDigitDate}`;

        if (onChangeDateValue) { onChangeDateValue(dateStr); }
    }, [onChangeDateValue, displayDateObject]);

    const onMoveMonth = useCallback((move: 'next' | 'prev' | 'today') => {
        if (move === 'today') {
            setDisplayDateObject({...nowDate()});
        } else if (move === 'next' || move === 'prev') {
            setDisplayDateObject((prev) => {
                const moveValue = move === 'next' ? 1 : -1;
                const newMonth = ((prev.month + moveValue - 1 + 12) % 12) + 1;
                const newYear = prev.year + Math.floor((prev.month + moveValue - 1) / 12);
                return {...prev, month: newMonth, year: newYear};
            });
        } else {
            throw new Error('Invalid move value');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // endregion


    // region [Effects]

    // endregion


    // region [Templates]

    return (
        <div className={'t-day-selector'} data-testid={'t-day-selector'}>
            <div className={'t-day-selector__header'}>

                <div className={'t-day-selector__header__current-display-date'}>
                    <div data-testid={'t-date-picker-display-year'}
                         onClick={() => { changeViewMode('year'); }}>
                        {displayDateObject.year}년
                    </div>
                    <div data-testid={'t-date-picker-display-month'}
                         onClick={() => { changeViewMode('month'); }}>
                        {displayDateObject.month}월
                    </div>
                    <TIcon xsmall>arrow_drop_down</TIcon>
                </div>

                <div className={'t-day-selector__header__control'} data-testid={'t-day-selector-control'}>
                    <TButton onClick={() => { onMoveMonth('prev'); }} xsmall
                             className={'t-day-selector__header__control__icon-button'}>
                        <TIcon xsmall color={themeToken.tGrayColor5}>arrow_left</TIcon>
                    </TButton>
                    <TButton onClick={() => { onMoveMonth('today'); }} xsmall
                             className={'t-day-selector__header__control__today-button'}>오늘</TButton>
                    <TButton onClick={() => { onMoveMonth('next'); }} xsmall
                             className={'t-day-selector__header__control__icon-button'}>
                        <TIcon xsmall color={themeToken.tGrayColor5}>arrow_right</TIcon>
                    </TButton>
                </div>

            </div>

            <div className={'t-day-selector__content'}>

                <div className={'t-day-selector__content__weekday'}>
                    {weekList?.map((day) => <MemoizedDaySpan key={day} day={day}/>)}
                </div>

                <div className={'t-day-selector__content__day-container'}>
                    {
                        daysInMonth?.map((a) => (
                            <div key={a}
                                 className={'t-day-selector__content__day-container__item'}
                                 style={a === 0 ? {gridColumn: firstDayOfWeek} : {}}
                                 onClick={() => { onClickDate(a + 1); }}
                            >
                                <div className={`t-day-selector__content__day-container__item__day ${dateLabelClass((a + 1))}`}>
                                    {a + 1}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
    // endregion
};

TDaySelector.defaultProps = {
    value: `${new Date().getFullYear()}-`,
};

TDaySelector.displayName = 'TDaySelector';


export default TDaySelector;
