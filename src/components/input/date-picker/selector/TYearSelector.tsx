import {useCallback, useContext, useMemo} from 'react';
import TIcon from '~/icon/TIcon';
import TButton from '~/button/button/TButton';
import themeToken from '~style/designToken/ThemeToken.module.scss';
import datePickerConText from '~/input/date-picker/TDateContext';
import {TDateValue} from '~/input/date-picker';


const TYearSelector = () => {

    // region [Hooks]

    const {
        dateValue, handleDateValueChange, displayDateObject, setDisplayDateObject,
        changeViewMode, validDateRange, nowDate, viewMode,
    } = useContext(datePickerConText);

    const displayYearRange = useMemo(() => {
        const startYear = Math.floor(displayDateObject.year / 10) * 10;
        return Array.from({length: 10}, (_, index) => startYear + index);
    }, [displayDateObject]);

    // endregion


    // region [Privates]

    const selectedDateObject = useMemo((): TDateValue => {

        if (dateValue === '') { return {year: null, month: null, day: null}; }
        const year = Number(dateValue.substring(0, 4));

        return {year, month: null, day: null};
    }, [dateValue]);

    // endregion


    // region [Styles]

    const dateLabelClass = useCallback(
        (year: number): string => {

            const clazz = [];

            if (year === selectedDateObject.year) {
                clazz.push('t-year-selector__content__year-container__item__year--selected');
            }
            if (year === nowDate().year) {
                clazz.push('t-year-selector__content__year-container__item__year--today');
            }
            if (!validDateRange(`${year}`)) {
                clazz.push('t-year-selector__content__year-container__item__year--disabled');
            }

            return clazz.join(' ');
        },
        [selectedDateObject, displayDateObject, nowDate, validDateRange],
    );

    // endregion


    // region [Events]

    const onClickDate = useCallback((clickedYear: number) => {

        if (viewMode.current !== viewMode.original) {
            setDisplayDateObject((prev) => ({...prev, year: clickedYear}));
            changeViewMode('month');
            return;
        }

        if (validDateRange(clickedYear?.toString())) {
            handleDateValueChange(clickedYear?.toString());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleDateValueChange]);

    const onMoveYear = useCallback((move: 'next' | 'prev') => {
        if (move === 'next' || move === 'prev') {
            setDisplayDateObject((prev) => {
                const moveValue = move === 'next' ? 10 : -10;
                const newYear = prev.year + moveValue;

                if (newYear >= 1000 && newYear <= 9999) {
                    return {...prev, year: newYear};
                }
                return prev;
            });
        } else { throw new Error('Invalid move value'); }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // endregion


    // region [Effects]
    // endregion


    // region [Templates]

    return (
        <div className={'t-year-selector'} data-testid={'t-year-selector'}>
            <div className={'t-year-selector__header'}>
                <div className={'t-year-selector__header__current-display-date'}>
                    <div onClick={() => { changeViewMode('year'); }}>
                        {displayYearRange[0]}년 - {displayYearRange[displayYearRange.length - 1]}년
                    </div>
                    <TIcon xsmall>arrow_drop_down</TIcon>
                </div>

                <div className={'t-year-selector__header__control'}>
                    <TButton onClick={() => { onMoveYear('prev'); }} xsmall
                             className={'t-year-selector__header__control__icon-button'}>
                        <TIcon xsmall color={themeToken.tGrayColor5}>arrow_left</TIcon>
                    </TButton>
                    <TButton onClick={() => { onMoveYear('next'); }} xsmall
                             className={'t-year-selector__header__control__icon-button'}>
                        <TIcon xsmall color={themeToken.tGrayColor5}>arrow_right</TIcon>
                    </TButton>
                </div>
            </div>

            <div className={'t-year-selector__content'} data-testid={'t-day-selector-control'}>
                <div className={'t-year-selector__content__year-container'}>
                    {displayYearRange.map((year) => (
                        <span className={`t-year-selector__content__year-container__item ${dateLabelClass(year)}`}
                              onClick={() => { onClickDate(year); }} key={year}>
                            {year}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    // endregion
};

TYearSelector.defaultProps = {};

TYearSelector.displayName = 'TYearSelector';


export default TYearSelector;
