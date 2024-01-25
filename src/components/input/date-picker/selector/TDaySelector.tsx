import './TDaySelector.scss';
import {useEffect} from 'react';
import TIcon from '~/icon/TIcon';
import TIconButton from '~/button/icon-button/TIconButton';
import TButton from '~/button/button/TButton';

interface TDaySelectorProps {
    value: string,
    onChange: (value: string) => void,
}


const currentMonth = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
};


const TDaySelector = (props: TDaySelectorProps) => {


    // endregion


    // region [Styles]
    // endregion


    // region [Events]
    // endregion


    // region [ETC]
    // endregion


    // region [Effects]

    useEffect(() => {

    }, []);

    // endregion


    // region [Templates]

    return (
        <div className={'t-day-selector'} style={{marginTop: '16px'}}>
            <div className={'t-day-selector__header'}>
                <span className={'t-day-selector__header__current-month'}>
                    {`${currentMonth.year}년 ${currentMonth.month}월`}
                    <TIcon small>arrow_drop_down</TIcon>
                </span>

                <span className={'t-day-selector__header__control'}>
                    <TButton small className={'t-day-selector__header__control__icon-button'}><TIcon xsmall>arrow_left</TIcon></TButton>
                    <TButton small className={'t-day-selector__header__control__today-button'}>오늘</TButton>
                    <TButton small className={'t-day-selector__header__control__icon-button'}><TIcon xsmall>arrow_right</TIcon></TButton>
                </span>
            </div>

            <div className={'t-day-selector__content'}>
                <div className={'t-day-selector__content__weekday'}>
                    <span className={'t-day-selector__content__weekday__item'}>일</span>
                    <span className={'t-day-selector__content__weekday__item'}>월</span>
                    <span className={'t-day-selector__content__weekday__item'}>화</span>
                    <span className={'t-day-selector__content__weekday__item'}>수</span>
                    <span className={'t-day-selector__content__weekday__item'}>목</span>
                    <span className={'t-day-selector__content__weekday__item'}>금</span>
                    <span className={'t-day-selector__content__weekday__item'}>토</span>
                </div>

                <div className={'t-day-selector__content__day-container'}>

                </div>
            </div>


        </div>
    );

    // endregion
};

TDaySelector.defaultProps = {};

TDaySelector.displayName = 'TDaySelector';


export default TDaySelector;
