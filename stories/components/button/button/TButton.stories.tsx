import {ReactNode} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import TButton from '@/components/button/button/TButton';


const meta: Meta<typeof TButton> = {
    title: 'Button/TButton',
    component: TButton,
};
export default meta;


type Story = StoryObj<typeof TButton>;

const Container = ({label, children}: { label: string, children: ReactNode }) => {
    return (
        <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}}>
            <p style={{fontSize: '14px'}}>{label}</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>{children}</div>
        </div>
    );
};

const Template = (args) => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
        <Container label={'Default'}>
            <TButton {...args} >Normal</TButton>
            <TButton {...args} outlined>Outlined</TButton>
            <TButton {...args} plain>Plain</TButton>
            <TButton {...args} ghost>Ghost</TButton>
            <TButton {...args} rounded>Rounded</TButton>
            <TButton {...args} icon={'info'}>Icon Button</TButton>
        </Container>
        <Container label={'Disabled'}>
            <TButton {...args} disabled>Normal</TButton>
            <TButton {...args} outlined disabled>Outlined</TButton>
            <TButton {...args} plain disabled>Plain</TButton>
            <TButton {...args} ghost disabled>Ghost</TButton>
            <TButton {...args} rounded disabled>Rounded</TButton>
            <TButton {...args} icon={'info'} disabled>Icon Button</TButton>
        </Container>
        <Container label={'Loading'}>
            <TButton {...args} loading>plain</TButton>
            <TButton {...args} outlined loading>primary</TButton>
            <TButton {...args} plain loading>main</TButton>
            <TButton {...args} ghost loading>point</TButton>
            <TButton {...args} rounded loading>rounded</TButton>
            <TButton {...args} icon={'info'} loading>Icon Button</TButton>
        </Container>
    </div>)
;

export const XSmall: Story = {
    render: Template,
    args: {xsmall: true},
};

export const Small: Story = {
    render: Template,
    args: {small: true},
};

export const Medium: Story = {
    render: Template,
    args: {medium: true},
};

export const Large: Story = {
    render: Template,
    args: {large: true},
};

export const XLarge: Story = {
    render: Template,
    args: {xlarge: true},
};
