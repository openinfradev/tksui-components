import {useCallback, memo, useState, useMemo, useEffect, MouseEvent} from 'react';
import TIcon from '~/icon/TIcon';
import TButton from '~/button/button/TButton';
import themeToken from '~style/designToken/ThemeToken.module.scss';
import {TDateValue} from '~/input/date-picker';

interface TDaySelectorProps {
    value: string,
    onChange: (date: TDateValue) => void,
}

const nowDate = ():TDateValue => ({
    year: new Date().getFullYear(),
    month: (new Date().getMonth() + 1),
    date: new Date().getDate(),
});


// FIXME: props 로 받아 포멧을 별도 지정 가능하도록 변경
const dayList = ['일', '월', '화', '수', '목', '금', '토'];

const DaySpan = ({day}: { day: string }) => (<span className={'t-day-selector__content__weekday__item'}>{day}</span>);
const MemoizedDaySpan = memo(DaySpan);


const TDaySelector = ({value, onChange}: TDaySelectorProps) => {

    const [selectedDate, setSelectedDate] = useState<TDateValue>({
        year: null, month: null, date: null,
    });
    const [displayDateInfo, setDisplayDateInfo] = useState<TDateValue>({
        ...nowDate(),
    });

    // endregion


    // region [Styles]

    const dateLabelClass = useCallback(
        (date: number): string => {

            if (displayDateInfo.year === selectedDate.year && displayDateInfo.month === selectedDate.month
                && date === selectedDate.date) {

                return 't-day-selector__content__day-container__item__day--selected';
            }
            if (displayDateInfo.year === nowDate().year && displayDateInfo.month === nowDate().month
                && date === nowDate().date) {

                return 't-day-selector__content__day-container__item__day--today';
            }
            return '';
        },
        [selectedDate, displayDateInfo],
    );

    // endregion


    // region [Privates]

    const initializeDateInfo = useCallback(() => {

        const year = Number(value.substring(0, 4));
        const month = Number(value.substring(4, 6));
        const date = Number(value.substring(6, 8));

        if (year !== 0 && month !== 0 && date !== 0) {
            setSelectedDate((prev) => ({year, month, date}));
        }

        if (year !== 0 && month !== 0) {
            setDisplayDateInfo((prev) => ({...prev, year, month, date: null}));
        } else if (year !== 0 && month === 0) {
            setDisplayDateInfo((prev) => ({...prev, year, month: 1}));
        }
    }, []);


    const daysInMonth = useMemo(() => {

        const lastDayOfMonth = (new Date(displayDateInfo.year, displayDateInfo.month, 0)).getDate();
        return Array.from(Array(lastDayOfMonth).keys());
    }, [displayDateInfo]);


    const firstDayOfWeek = useMemo((): number => {

        return (new Date(displayDateInfo.year, displayDateInfo.month - 1).getDay()) + 1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [daysInMonth, displayDateInfo]);


    // endregion


    // region [Events]

    const onClickDate = useCallback((clickedDate: number) => {

        const clickedDateInfo = {
            year: displayDateInfo.year,
            month: displayDateInfo.month,
            date: clickedDate,
        };

        setSelectedDate({year: clickedDateInfo.year, month: clickedDateInfo.month, date: clickedDate});

        if (onChange) {
            onChange(clickedDateInfo);
        }
    }, [onChange, displayDateInfo, daysInMonth]);

    const onMoveMonth = useCallback((move: 'next' | 'prev' | 'today') => {

        if (move === 'today') {
            setDisplayDateInfo({...nowDate()});
            setSelectedDate({...nowDate()});
        } else if (move === 'next' || move === 'prev') {
            setDisplayDateInfo((prev) => {
                const moveValue = move === 'next' ? 1 : -1;
                const newMonth = (prev.month + moveValue - 1 + 12) % 12 + 1;
                const newYear = prev.year + Math.floor((prev.month + moveValue - 1) / 12);
                return {...prev, month: newMonth, year: newYear};
            });
        } else { throw new Error('Invalid move value'); }
    }, []);

    // endregion


    // region [Effects]

    useEffect(() => {
        initializeDateInfo();
    }, []);

    // endregion


    // region [Templates]

    return (
        <div className={'t-day-selector'}>
            <div className={'t-day-selector__header'}>
                <div className={'t-day-selector__header__current-month'}>
                    {`${displayDateInfo.year}년 ${displayDateInfo.month}월`}
                    <TIcon xsmall>arrow_drop_down</TIcon>
                </div>

                <div className={'t-day-selector__header__control'}>
                    <TButton onClick={() => { onMoveMonth('prev'); }} plain xsmall
                             className={'t-day-selector__header__control__icon-button'}>
                        <TIcon xsmall color={themeToken.tGrayColor5}>arrow_left</TIcon>
                    </TButton>
                    <TButton onClick={() => { onMoveMonth('today'); }} plain xsmall
                             className={'t-day-selector__header__control__today-button'}>오늘</TButton>
                    <TButton onClick={() => { onMoveMonth('next'); }} plain xsmall
                             className={'t-day-selector__header__control__icon-button'}>
                        <TIcon xsmall color={themeToken.tGrayColor5}>arrow_right</TIcon>
                    </TButton>
                </div>
            </div>

            <div className={'t-day-selector__content'}>
                <div className={'t-day-selector__content__weekday'}>
                    {dayList.map((day) => <MemoizedDaySpan key={day} day={day}/>)}
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
