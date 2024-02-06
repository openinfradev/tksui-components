import type {Meta, StoryObj} from '@storybook/react';
import React, {ReactElement} from 'react';
import TIconButton from '~/button/icon-button/TIconButton';
import TTooltip from '../../../../src/components/guide/tooltip/TTooltip';


const meta: Meta<typeof TIconButton> = {
    title: 'Button/TIconButton',
    component: TIconButton,
};
export default meta;


type Story = StoryObj<typeof TIconButton>;

const Showcase = (props: { children: ReactElement}): ReactElement => {
    return (<div style={{display: 'flex', flexDirection: 'column', fontSize: '14px', gap: '8px', alignItems: 'center'}}>
        {props.children}
    </div>
    );
};


const Template = (args) => <>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 150px)', marginTop: '32px', rowGap: '40px', alignItems: 'center', textAlign: 'center'}}>
        <TTooltip id={'icon-button-tooltip'}/>
        <div></div>
        <div>Elevation</div>
        <div>Flat</div>
        <div>None</div>

        <div>Rectangle</div>
        <Showcase><TIconButton {...args} shape={'rectangle'} outline={'elevation'}>add</TIconButton></Showcase>
        <Showcase><TIconButton {...args} shape={'rectangle'} outline={'flat'}>add</TIconButton></Showcase>
        <Showcase><TIconButton {...args} shape={'rectangle'} outline={'none'}>add</TIconButton></Showcase>

        <div>Circle</div>
        <Showcase><TIconButton {...args} shape={'circle'} outline={'elevation'}>add</TIconButton></Showcase>
        <Showcase><TIconButton {...args} shape={'circle'} outline={'flat'}>add</TIconButton></Showcase>
        <Showcase><TIconButton {...args} shape={'circle'} outline={'none'}>add</TIconButton></Showcase>

    </div>

</>;
export const Default: Story = {
    render: Template,
    args: {
        tooltipTitle: 'title',
        tooltipContent: 'content',
        tooltipPlace: 'top',
        tooltipId: 'icon-button-tooltip',
    },
};

export const Disabled: Story = {
    render: Template,
    args: {
        disabled: true,
    },
};

