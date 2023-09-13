import React, {useState} from 'react';
import TStepBoxItem from '~/data-container/step-box/TStepBoxItem';


const StackCreateCspStep = () => {

    // region [Hooks]

    const [cloudService, setCloudService] = useState<string>('');

    // endregion
    return (
        <TStepBoxItem>
            <div>렌더링 되어라</div>
        </TStepBoxItem>
    );
};

export default StackCreateCspStep;
