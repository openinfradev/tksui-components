import {memo, useCallback} from 'react';

import TDatePickerHelpers from '../TDatePickerHelpers';

interface TTimeSelectorProps {
    value?: string;
    onChange?: (time: string) => void;
}

const TTimeSelector = ({value, onChange}: TTimeSelectorProps) => {
    // region [Hooks]

    const timeOptions = TDatePickerHelpers.generateTimeOptions();

    // endregion

    // region [Events]

    const onClickTime = useCallback(
        (time: string) => {
            onChange?.(time);
        },
        [onChange]
    );

    // endregion

    // region [Templates]

    return (
        <div className={'t-time-selector'} data-testid={'t-time-selector'}>
            <div className={'t-time-selector__content__time-list'}>
                {timeOptions.map((time) => (
                    <div
                        key={time}
                        className={`t-time-selector__content__time-list__item ${
                            value === time ? 't-time-selector__content__time-list__item--selected' : ''
                        }`}
                        onClick={() => onClickTime(time)}
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
