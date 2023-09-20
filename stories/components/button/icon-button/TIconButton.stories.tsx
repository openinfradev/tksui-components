import type {Meta, StoryObj} from '@storybook/react';
import {ReactElement} from 'react';
import TIconButton from '~/button/icon-button/TIconButton';
import TIcon from '../../../../src/components/icon/TIcon';


const meta: Meta<typeof TIconButton> = {
    title: 'Button/TIconButton',
    component: TIconButton,
};
export default meta;


type Story = StoryObj<typeof TIconButton>;

const Showcase = (props: { children: ReactElement, label: string }): ReactElement => {
    return (<div style={{display: 'flex', flexDirection: 'column', fontSize: '14px', gap: '8px', alignItems: 'center'}}>
        {props.children}
    </div>
    );
};


const Template = (args) => <>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 150px)', marginTop: '32px', rowGap: '40px', alignItems: 'center', textAlign: 'center'}}>
        <div></div>
        <div>Default</div>
        <div>Disabled</div>
        <div>Outlined</div>
        <div>Outlined Disabled</div>


        <div>Default</div>
        <Showcase label={'default'}><TIconButton {...args}>add</TIconButton></Showcase>
        <Showcase label={'disabled'}><TIconButton {...args} disabled>add</TIconButton></Showcase>
        <Showcase label={'outlined'}><TIconButton {...args} outlined>add</TIconButton></Showcase>
        <Showcase label={'outlined'}><TIconButton {...args} disabled outlined>add</TIconButton></Showcase>

        <div>Primary</div>
        <Showcase label={'default'}><TIconButton {...args} primary>add</TIconButton></Showcase>
        <Showcase label={'disabled'}><TIconButton {...args} primary disabled>add</TIconButton></Showcase>
        <Showcase label={'outlined'}><TIconButton {...args} primary outlined>add</TIconButton></Showcase>
        <Showcase label={'disabled'}><TIconButton {...args} primary disabled outlined>add</TIconButton></Showcase>

        <div>Point</div>
        <Showcase label={'default'}><TIconButton {...args} point>add</TIconButton></Showcase>
        <Showcase label={'disabled'}><TIconButton {...args} point disabled>add</TIconButton></Showcase>
        <Showcase label={'outlined'}><TIconButton {...args} point outlined>add</TIconButton></Showcase>
        <Showcase label={'disabled'}><TIconButton {...args} point disabled outlined>add</TIconButton></Showcase>
    </div>

</>;
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

