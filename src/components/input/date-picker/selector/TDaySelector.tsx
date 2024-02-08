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


// FIXME: props 로 받아 포멧을 별도 지정 가능하도록 변경
const weekList = ['일', '월', '화', '수', '목', '금', '토'];

const DaySpan = ({day}: { day: string }) => (<span className={'t-day-selector__content__weekday__item'}>{day}</span>);
const MemoizedDaySpan = memo(DaySpan);


const TDaySelector = () => {

    // region [Hooks]

    const {dateValue, changeViewMode, handleDateValueChange, dateRange, parseDateString, validDateRange} = useContext(datePickerConText);
    const [displayDateObject, setDisplayDateObject] = useState<TDateValue>({
        ...nowDate(),
    });

    const selectedDateObject = useMemo(():TDateValue => {

        if (dateValue === '') { return {year: null, month: null, day: null}; }

        const {year, month, day} = parseDateString(dateValue);

        if (year !== 0 && month !== 0 && day !== 0) { return {year, month, day}; }

        return {year: null, month: null, day: null};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue]);

    // endregion


    // region [Privates]

    const initializeDisplayDateInfo = useCallback((): void => {

        // 현재 dateValue 로 처음 보여질 캘린더 상태를 초기화
        // 우선순위 1 - 현재 선택된 값이 있는 경우 그 날짜 기준으로 캘린더를 보여줌
        // 우선순위 2 - 현재 값이 없을 때, from, to 둘 다 값이 있는 경우 from 기준으로 보여줌(애매함)
        //  => DatePicker 2개 달린 Range 컴포넌트가 별도로 있고 보여줄 상태를 prop 으로 받던가 position 역할이 부여돼야 해결됌)
        // 우선순위 3 - from, to 각 하나 씩만 있는 경우 그 날짜 기준으로 보여줌
        // 우선순위 4 - from, to 없는 경우 현재 날짜 기준으로 보여줌
        const {year, month} = parseDateString(dateValue);

        if (year !== 0 && month !== 0) {
            setDisplayDateObject((prev) => ({...prev, year, month, day: null}));
        } else if (dateRange.openFrom && dateRange.openTo) { // 둘 다 설정 시 여기가 애매함

            const {year: openFromYear, month: openFromMonth} = parseDateString(dateRange.openFrom);
            setDisplayDateObject((prev) => ({...prev, year: openFromYear, month: openFromMonth}));
        } else if (dateRange.openFrom && !dateRange.openTo) {

            const {year: openFromYear, month: openFromMonth} = parseDateString(dateRange.openFrom);
            setDisplayDateObject((prev) => ({...prev, year: openFromYear, month: openFromMonth}));
        } else if (!dateRange.openFrom && dateRange.openTo) {

            const {year: openToYear, month: openToMonth} = parseDateString(dateRange.openTo);
            setDisplayDateObject((prev) => ({...prev, year: openToYear, month: openToMonth}));
        } else if (year !== 0 && month === 0) {

            setDisplayDateObject((prev) => ({...prev, year, month: 1}));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateRange, dateValue]);


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
        [validDateRange, selectedDateObject, displayDateObject],
    );

    // endregion


    // region [Events]

    const onClickDate = useCallback((clickedDate: number) => {

        const twoDigitMonth = displayDateObject.month > 9 ? displayDateObject.month : `0${displayDateObject.month}`;
        const twoDigitDate = clickedDate > 9 ? clickedDate : `0${clickedDate}`;

        const dateStr = `${displayDateObject.year}${twoDigitMonth}${twoDigitDate}`;

        if (handleDateValueChange) { handleDateValueChange(dateStr); }
    }, [handleDateValueChange, displayDateObject]);

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
    }, []);

    // endregion


    // region [Effects]

    useEffect(() => {
        initializeDisplayDateInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // endregion


    // region [Templates]

    return (
        <div className={'t-day-selector'} data-testid={'t-date-selector'}>
            <div className={'t-day-selector__header'}>
                <div className={'t-day-selector__header__current-month'}>
                    <div onClick={() => { changeViewMode('year'); }}>{displayDateObject.year}년</div>
                    <div onClick={() => { changeViewMode('month'); }}>{displayDateObject.month}월</div>
                    <TIcon xsmall>arrow_drop_down</TIcon>
                </div>

                <div className={'t-day-selector__header__control'}>
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
                    {weekList.map((day) => <MemoizedDaySpan key={day} day={day}/>)}
                </div>

                <div className={'t-day-selector__content__day-container'}>
                    {
                        daysInMonth.map((a) => (
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
    value: `${nowDate().year}-`,
};

TDaySelector.displayName = 'TDaySelector';


export default TDaySelector;
