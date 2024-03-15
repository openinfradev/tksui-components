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

    return (<>

        <TStepBox
            value={stepNumber}
            onChange={setStepNumber}
            stepLabels={['설치환경 선택', '스택 템플릿 선택', '속성 입력', '정책 템플릿 선택', '정책 선택', '확인 및 생성']}
            {...args}
        >
            <TStepBoxItem><div>Step 1 Content</div></TStepBoxItem>
            <TStepBoxItem><div>Step 2 Content</div></TStepBoxItem>
            <TStepBoxItem><div>Step 3 Content</div></TStepBoxItem>
            <TStepBoxItem><div>Step 4 Content</div></TStepBoxItem>
            <TStepBoxItem><div>Step 5 Content</div></TStepBoxItem>
            <TStepBoxItem><div>Step 6 Content</div></TStepBoxItem>

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
