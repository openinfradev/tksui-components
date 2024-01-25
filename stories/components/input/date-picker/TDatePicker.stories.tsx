import {Meta, StoryObj} from '@storybook/react';
import {toast} from 'react-toastify';
import {ReactNode, useEffect, useRef} from 'react';
import useInputState from '@/common/hook/UseInputState';

import TDatePicker from '~/input/date-picker/TDatePicker';
import {TDatePickerRef, TDatePickerProps} from '~/input/date-picker';

const meta: Meta<typeof TDatePicker> = {
    title: 'Input/TDatePicker',
    component: TDatePicker,
};

export default meta;

type Story = StoryObj<typeof TDatePicker>;


const Container = ({label, value, children}: { label: string, value: string, children: ReactNode }) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
            <p style={{fontSize: '18px'}}>{label}</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <p>{value}</p>
                <div>{children}</div>
            </div>
        </div>
    );
};


// region [Normal]

const NormalTemplate = (args: TDatePickerProps) => {

    const datePickerRef = useRef<TDatePickerRef>(null);
    const input = useInputState('20240205');

    useEffect(() => {
        datePickerRef.current?.open();
    }, []);

    return (
        <>
            <Container label={'DatePicker(type: date)'} value={`Value: ${input.value}`}>
                <TDatePicker {...args} ref={datePickerRef} value={input.value} onChange={input.onChange}/>
            </Container>
        </>);
};


export const Default: Story = {
    render: NormalTemplate,
};


// endregion

