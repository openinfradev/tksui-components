import {Meta, StoryObj} from '@storybook/react';

import {useState} from 'react';
import TModal from '~/tks/component/screen/modal/TModal';
import TButton from '~/tks/component/button/button/TButton';


const meta: Meta<typeof TModal> = {
    title: 'Screen/TModal',
    component: TModal,
    args: {
        containerId: 'storybook-root',
    },

};
export default meta;

type Story = StoryObj<typeof TModal>;


const Template = (args) => {

    const [isOpen, setIsOpen] = useState(false);

    const footer = (<>
        <TButton width={'50%'} onClick={() => setIsOpen(false)}>취소</TButton>
        <TButton width={'50%'} main>저장</TButton>
    </>);

    return (
        <>
            <TButton onClick={() => setIsOpen(true)}>모달 열기</TButton>
            <TModal {...args}
                    title={'클러스터 생성'}
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    footer={footer}>

            </TModal>
        </>
    );
};


export const Small: Story = {
    render: Template,
    args: {
        small: true,
    },
};

export const Medium: Story = {
    render: Template,
    args: {
        medium: true,
    },
};

export const Large: Story = {
    render: Template,
    args: {
        large: true,
    },
};

export const XLarge: Story = {
    render: Template,
    args: {
        xlarge: true,
    },
};

export const XXLarge: Story = {
    render: Template,
    args: {
        xxlarge: true,
    },
};
