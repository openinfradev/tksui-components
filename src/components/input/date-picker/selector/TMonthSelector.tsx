import {useCallback, useContext, useMemo} from 'react';
import TIcon from '~/icon/TIcon';
import TButton from '~/button/button/TButton';
import themeToken from '~style/designToken/ThemeToken.module.scss';
import {TDateValue} from '~/input/date-picker';
import datePickerConText from '~/input/date-picker/TDateContext';


const months = [
    {value: 1, label: 'Jan'}, {value: 2, label: 'Feb'}, {value: 3, label: 'Mar'},
    {value: 4, label: 'Apr'}, {value: 5, label: 'May'}, {value: 6, label: 'Jun'},
    {value: 7, label: 'Jul'}, {value: 8, label: 'Aug'}, {value: 9, label: 'Sep'},
    {value: 10, label: 'Oct'}, {value: 11, label: 'Nov'}, {value: 12, label: 'Dec'},
];

const TMonthSelector = () => {

    // region [Hooks]

    const {dateValue, onChangeDateValue, displayDateObject, setDisplayDateObject,
        changeViewMode, nowDate, viewMode} = useContext(datePickerConText);

    const selectedDateObject = useMemo((): TDateValue => {

        if (dateValue === '') { return {year: null, month: null, day: null}; }

        const year = Number(dateValue.substring(0, 4));
        const month = Number(dateValue.substring(4, 6));
        const day = null;

        if (year !== 0 && month !== 0) { return {year, month, day}; }

        return {year: null, month: null, day: null};
    }, [dateValue]);

    // endregion


    // region [Styles]

    const dateLabelClass = useCallback(
        (month: number): string => {

            if (displayDateObject.year === selectedDateObject.year && month === selectedDateObject.month) {

                return 't-day-selector__content__day-container__item__month--selected';
            }
            if (displayDateObject.year === nowDate().year && month === nowDate().month) {

                return 't-day-selector__content__day-container__item__month--today';
            }
            return '';
        },
        [selectedDateObject, displayDateObject, nowDate],
    );

    // endregion


    // region [Privates]

    // endregion


    // region [Events]

    const onClickDate = useCallback((clickedDate: number) => {

        const twoDigitMonth = clickedDate > 9 ? clickedDate : `0${clickedDate}`;
        const dateStr = `${displayDateObject.year}${twoDigitMonth}`;

        if (viewMode.current !== viewMode.original) {
            setDisplayDateObject((prev) => ({...prev, year: displayDateObject.year, month: clickedDate}));
            changeViewMode('date');
        } else { onChangeDateValue(dateStr); }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewMode, displayDateObject, onChangeDateValue]);

    const onMoveMonth = useCallback((move: 'next' | 'prev') => {
        setDisplayDateObject((prev) => {
            const moveValue = move === 'next' ? 1 : -1;
            const newYear = prev.year + moveValue;
            if (newYear >= 1000 && newYear <= 9999) {
                return {...prev, year: newYear};
            }
            return prev;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // endregion


    // region [Effects]

    // endregion


    // region [Templates]

    return (
        <div className={'t-month-selector'} data-testid={'t-month-selector'}>
            <div className={'t-month-selector__header'}>

                <div className={'t-month-selector__header__current-display-date'}>
                    <div data-testid={'t-date-picker-display-year'}
                         onClick={() => { changeViewMode('year'); }}>{displayDateObject.year}년
                    </div>
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

            <div className={'t-month-selector__content'}>
                <div className={'t-month-selector__content__months-container'}>

                    {months.map((mon, idx) => (
                        <span className={`t-month-selector__content__months__item ${dateLabelClass(idx + 1)}`}
                              onClick={() => { onClickDate(mon.value); }} key={mon.value}
                        >
                            {mon.value}
                        </span>
                    ))}

                </div>
            </div>
        </div>
    );

    // endregion
};

TMonthSelector.defaultProps = {
    value: `${new Date().getFullYear()}-`,
};

TMonthSelector.displayName = 'TMonthSelector';


export default TMonthSelector;
