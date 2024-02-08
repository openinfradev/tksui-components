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
        <div style={{display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px 0'}}>
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
    const monthPickerRef = useRef<TDatePickerRef>(null);
    const yearPickerRef = useRef<TDatePickerRef>(null);
    const dateRagnePickerrRef = useRef<TDatePickerRef>(null);

    const dateInput = useInputState('20240205');
    const monthInput = useInputState('202402');
    const yearInput = useInputState('2024');

    const rangeDate1Input = useInputState('');
    const rangeDate2Input = useInputState('');

    const openFrom = '20240210';

    useEffect(() => {
        // datePickerRef.current?.open();
        // monthPickerRef.current?.open();
        // yearPickerRef.current?.open();
    }, []);

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'flex-start', gap: '120px'}}>
                <Container label={'DatePicker(Date Type)'} value={`Value: ${dateInput.value}`}>
                    <TDatePicker {...args} ref={datePickerRef} value={dateInput.value} onChange={dateInput.onChange}/>
                </Container>
                <Container label={'DatePicker(Month Type)'} value={`Value: ${monthInput.value}`}>
                    <TDatePicker {...args} ref={monthPickerRef} view={'month'} value={monthInput.value} onChange={monthInput.onChange}/>
                </Container>
                <Container label={'DatePicker(Year Type)'} value={`Value: ${yearInput.value}`}>
                    <TDatePicker {...args} ref={yearPickerRef} view={'year'} value={yearInput.value} onChange={yearInput.onChange}/>
                </Container>
            </div>
            <br/>

            <br/>
            <br/>
            <div>
                <Container label={`DatePicker(Date type + Range Option: open-from: ${openFrom})`} value={`Value: ${rangeDate1Input.value}`}>
                    <TDatePicker {...args} ref={dateRagnePickerrRef} openFrom={openFrom} view={'date'} value={rangeDate1Input.value}
                                 onChange={rangeDate1Input.onChange}/>
                </Container>
                <Container label={`DatePicker(Date type + Range Option: open-from: ${openFrom})`} value={`Value: ${rangeDate2Input.value}`}>
                    <TDatePicker {...args} ref={dateRagnePickerrRef} openTo={openFrom} view={'date'} value={rangeDate2Input.value}
                                 onChange={rangeDate2Input.onChange}/>
                </Container>
            </div>
        </>);
};


export const Default: Story = {
    render: NormalTemplate,
};


// endregion

