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


const Container = ({label, children}: { label: string, children: ReactNode }) => {
    return (
        <div style={{border: '1px solid #eee', padding: '16px'}}>
            <p style={{marginBottom: '16px', fontSize: '14px'}}>{label}</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                {children}
            </div>
        </div>
    );
};


const NormalTemplate = (args: TChipProps) => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>

        <Container label={'Chip(type: Outlined)'}>
            <TChip {...args} outlined onRemove={() => { notify('삭제 이벤트 발생'); }}>Multi Select1</TChip>
            <TChip {...args} outlined onRemove={() => { notify('삭제 이벤트 발생'); }}>Multi Select2</TChip>
            <TChip {...args} outlined onRemove={() => { notify('삭제 이벤트 발생'); }}>
                Multi Select3
            </TChip>
            <TChip {...args} outlined prevIcon={'face'} prevIconSize={'xlarge'} onRemove={() => { notify('삭제 이벤트 발생'); }}>Multi Select5</TChip>
            <TChip {...args} outlined prevIcon={'battery_horiz_075'} onRemove={() => { notify('삭제 이벤트 발생'); }}>Multi Select4</TChip>
        </Container>

        <Container label={'Chip(type: Fill)'}>
            <TChip {...args} fill>Multi Select1</TChip>
            <TChip {...args} fill>prometheus-stack v0.62.0</TChip>
        </Container>

        <TToast/>
    </div>);


export const Default: Story = {
    render: NormalTemplate,
    args: {onRemove: undefined},
};

