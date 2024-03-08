import {Meta, StoryObj} from '@storybook/react';
import React, {ReactNode, useRef} from 'react';
import useInputState from '@/common/hook/UseInputState';

import TDatePicker from '~/input/date-picker/TDatePicker';
import {TDatePickerProps, TDatePickerRef} from '~/input/date-picker';

const meta: Meta<typeof TDatePicker> = {
    title: 'Input/TDatePicker',
    component: TDatePicker,
};

export default meta;

type Story = StoryObj<typeof TDatePicker>;

const Wrapper = ({children}: {children: ReactNode}) => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '36px'}}>
        {children}
    </div>
);
const Container = ({children}: {children: ReactNode}) => (
    <div style={{display: 'flex', alignItems: 'center', gap: '120px'}}>
        {children}
    </div>
);
const Item = ({label, value, children}: { label: string, value: string, children: ReactNode }) => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
        <p style={{fontSize: '20px'}}>{label}</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <p style={{marginBottom: '6px'}}>{value}</p>
            <div>{children}</div>
        </div>
    </div>
);


// region [Normal]

const NormalTemplate = (args: TDatePickerProps) => {

    const dateValue1 = useInputState(args.value);
    const dateValue2 = useInputState(args.value);
    const dateValue3 = useInputState(args.value);

    return (
        <Wrapper>
            <Container>
                <Item label={`view: ${args.valueType} / No Range`} value={`value: ${dateValue1.value}`}>
                    <TDatePicker value={dateValue1.value} onChange={dateValue1.onChange} valueType={args.valueType}/>
                </Item>
                <Item label={`openFrom: ${args.openFrom || ''}`}
                      value={`value: ${dateValue2.value}`}>
                    <TDatePicker value={dateValue2.value} openFrom={args.openFrom} valueType={args.valueType}
                                 onChange={dateValue2.onChange}/>
                </Item>
                <Item label={`openFrom: ${args.openFrom || ''} + openTo: ${args.openTo || ''}`}
                      value={`value: ${dateValue3.value}`}>
                    <TDatePicker value={dateValue3.value} openFrom={args.openFrom} openTo={args.openTo} valueType={args.valueType}
                                 onChange={dateValue3.onChange}/>
                </Item>
            </Container>
            <Container>
                <Item label={'Disabled'} value={`value: ${dateValue1.value}`}>
                    <TDatePicker value={dateValue1.value} onChange={dateValue1.onChange} valueType={args.valueType} disabled/>
                </Item>
            </Container>
        </Wrapper>);
};


export const DateType: Story = {
    render: NormalTemplate,
    args: {
        valueType: 'date',
        value: '20240212',
        openFrom: '20240210',
        openTo: '20240320',
    },
};

export const MonthType: Story = {
    render: NormalTemplate,
    args: {
        valueType: 'month',
        value: '202405',
        openFrom: '202403',
        openTo: '202408',
    },
};

export const YearType: Story = {
    render: NormalTemplate,
    args: {
        valueType: 'year',
        value: '2024',
        openFrom: '2023',
        openTo: '2028',
    },
};

// endregion

