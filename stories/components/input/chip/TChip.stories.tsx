import {Meta, StoryObj} from '@storybook/react';
import {ReactNode} from 'react';
import TChip from '@/components/input/chip/TChip';
import {TChipProps} from '@/components/input/chip/TChip.interface';
import TToast, {notify} from '@/components/guide/toast/TToast';


const meta: Meta<typeof TChip> = {
    title: 'Input/TChip',
    component: TChip,
};
export default meta;

type Story = StoryObj<typeof TChip>;

const ChipContainer = (props: { children: ReactNode }) => (
    <div style={{marginBottom: '16px', display: 'flex', alignItems: 'center'}}>
        {props.children}
    </div>
);


const NormalTemplate = (args: TChipProps) => (<>

    <ChipContainer>
        <TChip {...args}>hello</TChip>
        <TChip {...args} onRemove={() => { notify('삭제 이벤트 발생'); }}>hello</TChip>
        <TChip {...args} onRemove={() => { notify('삭제 이벤트 발생'); }} removeIcon={'clear'}>hello</TChip>
        <TChip {...args} icon={'face'}>hello</TChip>
        <TChip {...args} icon={'face'} onRemove={() => { notify('삭제 이벤트 발생'); }}>hello</TChip>
    </ChipContainer>

    <ChipContainer>
        <TChip {...args} primary>hello</TChip>
        <TChip {...args} primary onRemove={() => { notify('삭제 이벤트 발생'); }}>hello</TChip>
        <TChip {...args} primary onRemove={() => { notify('삭제 이벤트 발생'); }} removeIcon={'clear'}>hello</TChip>
        <TChip {...args} primary icon={'face'}>hello</TChip>
        <TChip {...args} primary icon={'face'} onRemove={() => { notify('삭제 이벤트 발생'); }}>hello</TChip>
    </ChipContainer>

    <ChipContainer>
        <TChip {...args} type={'outlined'}>hello</TChip>
        <TChip {...args} type={'outlined'} onRemove={() => { notify('삭제 이벤트 발생'); }}>hello</TChip>
        <TChip {...args} type={'outlined'} onRemove={() => { notify('삭제 이벤트 발생'); }} removeIcon={'clear'}>hello</TChip>
        <TChip {...args} type={'outlined'} icon={'face'}>hello</TChip>
        <TChip {...args} type={'outlined'} icon={'face'} onRemove={() => { notify('삭제 이벤트 발생'); }}>hello</TChip>
    </ChipContainer>

    <ChipContainer>
        <TChip {...args} type={'outlined'} primary>hello</TChip>
        <TChip {...args} type={'outlined'} primary onRemove={() => { notify('삭제 이벤트 발생'); }}>hello</TChip>
        <TChip {...args} type={'outlined'} primary onRemove={() => { notify('삭제 이벤트 발생'); }} removeIcon={'clear'}>hello</TChip>
        <TChip {...args} type={'outlined'} primary icon={'face'}>hello</TChip>
        <TChip {...args} type={'outlined'} primary icon={'face'} onRemove={() => { notify('삭제 이벤트 발생'); }}>hello</TChip>
    </ChipContainer>

    <TToast/>
</>);


export const XSmall: Story = {
    render: NormalTemplate,
    args: {
        onRemove: undefined,
        xsmall: true,
    },
};

export const Small: Story = {
    render: NormalTemplate,
    args: {
        onRemove: undefined,
        small: true,
    },
};

export const Medium: Story = {
    render: NormalTemplate,
    args: {
        onRemove: undefined,
        medium: true,
    },
};

export const Large: Story = {
    render: NormalTemplate,
    args: {
        onRemove: undefined,
        large: true,
    },
};

export const XLarge: Story = {
    render: NormalTemplate,
    args: {
        onRemove: undefined,
        xlarge: true,
    },
};
