import {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';

import TButton from '~/tks/component/button/button/TButton';
import TProgress from '~/tks/component/guide/progress/TProgress';


const meta: Meta<typeof TProgress> = {
    title: 'Guide/TProgress',
    component: TProgress,
};
export default meta;

type Story = StoryObj<typeof TProgress>;


const Template = () => {

    const [isProgressOpen, setProgressOpen] = useState(false);

    const progressOn = () => {
        setProgressOpen(true);

        setTimeout(() => setProgressOpen(false), 3000);
    };


    return (<>
        <TButton onClick={progressOn}>Progress 3초간 열기</TButton>
        <TProgress containerId={'storybook-root'}
                   isOpen={isProgressOpen}
                   onRequestClose={() => setProgressOpen(false)}
                   message={'3초 후 닫힙니다'}
        />
    </>);
};


export const Default: Story = {
    render: Template,
};

