import {Meta, StoryObj} from '@storybook/react';

import {TSpinner, TSpinnerProps} from '~/guide/spinner';


const meta: Meta<typeof TSpinner> = {
    title: 'Guide/TSpinner',
    component: TSpinner,
};
export default meta;

type Story = StoryObj<typeof TSpinner>;


const Template = (args: TSpinnerProps) => {

    return (

        <>
            <TSpinner {...args} size={'xsmall'}/>
            <TSpinner {...args} size={'small'}/>
            <TSpinner {...args} size={'medium'}/>
            <TSpinner {...args} size={'large'}/>
            <TSpinner {...args} size={'xlarge'}/>
        </>
    );
};


export const Default: Story = {
    render: Template,
    args: {},
};

export const CustomColor: Story = {
    render: Template,
    args: {color: 'skyblue'},
};

