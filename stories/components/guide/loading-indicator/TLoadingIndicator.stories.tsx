import {Meta, StoryObj} from '@storybook/react';
import {TLoadingIndicator, TLoadingIndicatorProps} from '@/components';


const meta: Meta<typeof TLoadingIndicator> = {
    title: 'Guide/TLoadingIndicator',
    component: TLoadingIndicator,
};
export default meta;

type Story = StoryObj<typeof TLoadingIndicator>;


const Template = (args: TLoadingIndicatorProps) => {

    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <TLoadingIndicator {...args} size={'xsmall'}/>
            <TLoadingIndicator {...args} size={'small'}/>
            <TLoadingIndicator {...args} size={'medium'}/>
            <TLoadingIndicator {...args} size={'large'}/>
            <TLoadingIndicator {...args} size={'xlarge'}/>
        </div>
    );
};


export const Default: Story = {
    render: Template,
    args: {},
};

export const defaultMessage: Story = {
    render: Template,
    args: {variant: 'default', message: '데이터를 불러오고 있습니다.'},
};

export const sun: Story = {
    render: Template,
    args: {variant: 'sun'},
};

export const sunMessage: Story = {
    render: Template,
    args: {variant: 'sun', message: '데이터를 불러오고 있습니다.'},
};

export const custom: Story = {
    render: Template,
    args: {variant: 'sun', message: '로딩 중...', color: 'violet'},
};
