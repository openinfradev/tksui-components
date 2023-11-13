import {Meta, StoryObj} from '@storybook/react';

import React, {useRef, useState} from 'react';
import TStepBox from '~/data-container/step-box/TStepBox';
import TStepBoxItem from '~/data-container/step-box/TStepBoxItem';
import {TTextFieldRef} from '@/components';
import TButton from '~/button/button/TButton';
import StackCreateCspStep from './StackCreateCspStep';


const meta: Meta<typeof TStepBox> = {
    title: 'DataContainer/TStepBox',
    component: TStepBox,
};

export default meta;

type Story = StoryObj<typeof TStepBox>;


const Template = (args) => {

    const [stepNumber, setStepNumber] = useState<number>(1);
    const [text, setText] = useState<string>('');
    const textRef = useRef<TTextFieldRef>(null);

    return (<>

        <TStepBox value={stepNumber} onChange={setStepNumber} stepLabels={['csp', 'step 2']} {...args} >
            <TStepBoxItem nextButtonDisabled>
                <div>
                    Step 2 Content
                </div>
            </TStepBoxItem>
            <TStepBoxItem>
                <div>
                    Step 2 Content
                </div>
            </TStepBoxItem>

        </TStepBox>
    </>);
};


export const Default: Story = {
    render: Template,
    args: {
        prevButtonLabel: '이전',
        nextButtonLabel: '다음',
        completeButtonLabel: '저장하기',
    },
};
