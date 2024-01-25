import {Meta, StoryObj} from '@storybook/react';
import useInputState from '@/common/hook/UseInputState';

import TCheckbox from '@/components/input/checkbox/TCheckbox';
import {TCheckboxProps} from '@/components/input/checkbox/TCheckbox.interface';
import TButton from '@/components/button/button/TButton';
import TValidatorRule from '@/common/validator/TValidatorRule';
import useRefs from '@/common/hook/UseRefs';
import TDatePicker from '~/input/date-picker/TDatePicker';
import {TDatePickerProps} from '~/input/date-picker';

const meta: Meta<typeof TDatePicker> = {
    title: 'Input/TDatePicker',
    component: TDatePicker,
};

export default meta;

type Story = StoryObj<typeof TDatePicker>;


// region [Normal]

const NormalTemplate = (args: TDatePickerProps) => {


    return (<>
        <TDatePicker value={''} />
    </>);
};


export const Default: Story = {
    render: NormalTemplate,
};


// endregion

