import {Meta, StoryObj} from '@storybook/react';
import {ReactElement} from 'react';
import TIcon from '@/components/icon/TIcon';
import {TIconProps} from '@/components/icon/TIcon.interface';


const meta: Meta<typeof TIcon> = {
    title: 'Input/TIcon',
    component: TIcon,
};
export default meta;

type Story = StoryObj<typeof TIcon>;

const Showcase = (props: { children: ReactElement }): ReactElement => {
    return (<div style={{display: 'flex', flexDirection: 'column', fontSize: '14px', gap: '8px', alignItems: 'center'}}>
        {props.children}
        {props.children.props.children}
    </div>
    );
};

const Template = (args: TIconProps) => {

    const originalIcons = [
        't_check_on',
        't_check_off',
        't_check_disabled_off',
        't_check_intermediate',
        't_radio_on',
        't_radio_off',
        't_radio_disabled_off',
        't_navigate_left',
        't_navigate_left_double',
        't_navigate_right',
        't_navigate_right_double',
        't_list',
        't_information',
        't_done',
        't_person',
    ];


    return (<>
        <div>
            <a href={'https://fonts.google.com/icons'}
               target={'_blank'}
               style={{textDecoration: 'underline', color: 'blue', cursor: 'pointer'}} rel='noreferrer'>
                아이콘 라이브러리 링크
            </a>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 150px)', marginTop: '32px', rowGap: '40px'}}>
            {
                originalIcons.map((icon) => (
                    <Showcase key={icon}><TIcon {...args}>{icon}</TIcon></Showcase>
                ))
            }

        </div>

    </>);
};

const OriginalTemplate = (args: TIconProps) => (<>

    <div style={{marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '16px'}}>
        <TIcon {...args}>check_on</TIcon>
        <TIcon {...args}>check_off</TIcon>
        <TIcon {...args}>check_disabled_off</TIcon>
        <TIcon {...args}>check_intermediate</TIcon>
        <TIcon {...args}>radio_on</TIcon>
        <TIcon {...args}>radio_off</TIcon>
        <TIcon {...args}>radio_disabled_off</TIcon>
        <TIcon {...args}>navigate_left</TIcon>
        <TIcon {...args}>navigate_left_double</TIcon>
        <TIcon {...args}>navigate_right</TIcon>
        <TIcon {...args}>navigate_left_right</TIcon>
        <TIcon {...args}>list</TIcon>
    </div>

</>);

export const Outline: Story = {
    render: Template,
    args: {
        type: 'outlined',
    },
};

export const Filled: Story = {
    render: Template,
    args: {
        type: 'filled',
    },
};


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

export const Colored: Story = {
    render: Template,
    args: {
        color: '#3617CE',
    },
};

