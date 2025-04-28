import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';

import TStepBox from '~/data-container/step-box/TStepBox';
import TStepBoxItem from '~/data-container/step-box/TStepBoxItem';

const meta: Meta<typeof TStepBox> = {
    title: 'DataContainer/TStepBox',
    component: TStepBox,
};

export default meta;

type Story = StoryObj<typeof TStepBox>;

const Template = (args) => {
    const [stepNumber, setStepNumber] = useState<number>(1);

    return (
        <>
            <TStepBox
                value={stepNumber}
                onChange={setStepNumber}
                stepLabels={[
                    '설치환경 선택',
                    '스택 템플릿 선택',
                    '속성 입력',
                    '정책 템플릿 선택',
                    '정책 선택',
                    '확인 및 생성',
                ]}
                {...args}
            >
                <TStepBoxItem contentDirection={'top-bottom'}>
                    <div>Step 1-1 Content</div>
                    <div>Step 1-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'top-bottom'}>
                    <div>Step 2-1 Content</div>
                    <div>Step 2-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'top-bottom'}>
                    <div>Step 3-1 Content</div>
                    <div>Step 3-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'top-bottom'}>
                    <div>Step 4-1 Content</div>
                    <div>Step 4-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'top-bottom'}>
                    <div>Step 5-1 Content</div>
                    <div>Step 5-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'top-bottom'}>
                    <div>Step 6-1 Content</div>
                    <div>Step 6-2 Content</div>
                </TStepBoxItem>
            </TStepBox>
            <br />
            <TStepBox
                value={stepNumber}
                onChange={setStepNumber}
                stepLabels={[
                    '설치환경 선택',
                    '스택 템플릿 선택',
                    '속성 입력',
                    '정책 템플릿 선택',
                    '정책 선택',
                    '확인 및 생성',
                ]}
                {...args}
            >
                <TStepBoxItem contentDirection={'left-right'}>
                    <div>Step 1-1 Content</div>
                    <div>Step 1-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'left-right'}>
                    <div>Step 2-1 Content</div>
                    <div>Step 2-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'left-right'}>
                    <div>Step 3-1 Content</div>
                    <div>Step 3-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'left-right'}>
                    <div>Step 4-1 Content</div>
                    <div>Step 4-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'left-right'}>
                    <div>Step 5-1 Content</div>
                    <div>Step 5-2 Content</div>
                </TStepBoxItem>
                <TStepBoxItem contentDirection={'left-right'}>
                    <div>Step 6-1 Content</div>
                    <div>Step 6-2 Content</div>
                </TStepBoxItem>
            </TStepBox>
        </>
    );
};

export const Default: Story = {
    render: Template,
    args: {
        prevButtonLabel: '이전',
        nextButtonLabel: '다음',
        completeButtonLabel: '저장하기',
    },
};
