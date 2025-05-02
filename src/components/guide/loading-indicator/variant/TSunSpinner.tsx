import {memo} from 'react';

const childElementCount = 8;

const TSunSpinner = () => {
    return (
        <>
            {Array.from({length: childElementCount}, (_, index) => (
                <div key={index} className={'t-sun-spinner__slice'} />
            ))}
        </>
    );
};

export default memo(TSunSpinner);
