import {memo, use} from 'react';

import datePickerConText from '../TDatePickerContext';
import TDatePickerHelpers from '../TDatePickerHelpers';

interface TTimeSelectorProps {
    // props removed - using context instead
}

const TTimeSelector = ({}: TTimeSelectorProps) => {
    // region [Hooks]

    const {timeValue, onChangeTimeValue, onChangeTempTime, showTime, tempTimeValue} = use(datePickerConText);

    const timeOptions = TDatePickerHelpers.generateTimeOptions();

    // endregion

    // region [Templates]

    return (
        <div className={'t-time-selector'} data-testid={'t-time-selector'}>
            <div className={'t-time-selector__content__time-list'}>
                {timeOptions.map((time) => (
                    <div
                        key={time}
                        className={`t-time-selector__content__time-list__item ${
                            (
                                showTime && tempTimeValue
                                    ? tempTimeValue === time.replace(':', '')
                                    : timeValue === time.replace(':', '')
                            )
                                ? 't-time-selector__content__time-list__item--selected'
                                : ''
                        }`}
                        onClick={() => {
                            // HH:MM 형식을 HHMM 형식으로 변환
                            const timeInHHMM = time.replace(':', '');

                            if (showTime) {
                                // date-time 모드: 임시값으로 저장
                                onChangeTempTime(timeInHHMM);
                            } else {
                                // 일반 모드: 즉시 적용
                                onChangeTimeValue(timeInHHMM);
                            }
                        }}
                    >
                        {time}
                    </div>
                ))}
            </div>
        </div>
    );
    // endregion
};

TTimeSelector.displayName = 'TTimeSelector';

export default memo(TTimeSelector);
