import type {CSSProperties} from 'react';
import {memo} from 'react';

interface TDefaultSpinnerProps {
    style: CSSProperties;
}

const childElementCount = 3;

const TDefaultSpinner = ({style}: TDefaultSpinnerProps) => {
    return (
        <>
            {Array.from({length: childElementCount}, (_, index) => (
                <div key={index} className={'t-default-spinner__slice'} style={style} />
            ))}
        </>
    );
};

export default memo(TDefaultSpinner);
