import type {Meta, StoryObj} from '@storybook/react';
import TButton from '@/components/button/button/TButton';


const meta: Meta<typeof TButton> = {
    title: 'Button/TButton',
    component: TButton,
};
export default meta;


type Story = StoryObj<typeof TButton>;

const Template = (args) => <>
    <TButton {...args} >plain</TButton>
    <TButton {...args} primary>primary</TButton>
    <TButton {...args} main>main</TButton>
    <TButton {...args} point>point</TButton>
    <TButton {...args} rounded>rounded</TButton>
    <br/> <br/>
    <TButton {...args} disabled>plain</TButton>
    <TButton {...args} primary disabled>primary</TButton>
    <TButton {...args} main disabled>main</TButton>
    <TButton {...args} point disabled>point</TButton>
    <TButton {...args} rounded disabled>rounded</TButton>
    <br/> <br/>
    <TButton {...args} loading>plain</TButton>
    <TButton {...args} primary loading>primary</TButton>
    <TButton {...args} main loading>main</TButton>
    <TButton {...args} point loading>point</TButton>
    <TButton {...args} rounded loading>rounded</TButton>
</>;

export const XSmall: Story = {
    render: Template,
    args: {
        xsmall: true,
    },
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
