import {Meta, StoryObj} from '@storybook/react';

import {CSSProperties} from 'react';
import {TTextFieldProps} from '~/tks/component/input/text-field/TTextField.interface';
import rule from '~/tks/component/common/validator/TValidatorRule';
import useInputState from '~/tks/component/common/hook/UseInputState';
import TButton from '~/tks/component/button/button/TButton';
import useRefs from '~/tks/component/common/hook/UseRefs';
import TNumberField from '~/tks/component/input/number-field/TNumberField';
import {TNumberFieldProps} from '~/tks/component/input/number-field/TNumberField.interface';


const meta: Meta<typeof TNumberField> = {
    title: 'Input/TNumberField',
    component: TNumberField,

};
export default meta;

type Story = StoryObj<typeof TNumberField>;


// region [Normal]

const NormalTemplate = (args: TNumberFieldProps) => {

    const numberField1 = useInputState('');
    const numberField2 = useInputState('');
    const numberField3 = useInputState('');
    const numberField4 = useInputState('');
    const numberField5 = useInputState('');
    const numberField6 = useInputState('');

    const containerStyle: CSSProperties = {
        width: '500px',
        border: '1px solid lightgray',
        padding: '16px',
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    };

    return (<>
        <div style={{display: 'flex', gap: '24px'}}>
            <div style={containerStyle}>

                <TNumberField {...args} label={'값 제한 없음'} {...numberField1} />

                <TNumberField {...args} label={'0-10, step 1'} {...numberField2} min={0} max={10} step={1}/>

                <TNumberField {...args} label={'0-10, step 2'}{...numberField3} min={0} max={10} step={2}/>

                <TNumberField {...args} label={'-10-10, step 5'} {...numberField4} min={-10} max={10} step={5}/>

                <TNumberField {...args} label={'읽기 전용'} value={'3'} disabled/>

                <TNumberField {...args} label={'커스텀 너비'} {...numberField5} width={'200px'}/>

                <TNumberField {...args} label={'필수 값'} {...numberField6} required/>

            </div>
        </div>
    </>);
};


export const Outline: Story = {
    render: NormalTemplate,
    args: {
        type: 'outline',
    },
};

export const Underline: Story = {
    render: NormalTemplate,
    args: {
        type: 'underline',
    },
};


// endregion

// region [Validation]

const ValidationTemplate = (args: TTextFieldProps) => {

    const textField1 = useInputState('');
    const textField2 = useInputState('');

    const [textField1Ref, textField2Ref] = useRefs(2);

    const containerStyle: CSSProperties = {
        width: '500px',
        border: '1px solid lightgray',
        padding: '16px',
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    };

    const validateChildren = () => {
        textField1Ref.current.validate();
        textField2Ref.current.validate();
    };

    return (<>
        <TButton main onClick={validateChildren}>검사</TButton>
        <div style={{display: 'flex', gap: '24px'}}>
            <div style={containerStyle}>


                <TNumberField {...args}
                              rules={[rule.required()]}
                              {...textField1}
                              ref={textField1Ref}
                              required
                              label={'필수 값'}
                />
                <TNumberField {...args}
                              rules={[rule.required()]}
                              {...textField2}
                              ref={textField2Ref}
                              required
                              type={'underline'}
                              label={'필수 값'}
                />
            </div>

        </div>
    </>);
};


export const Validation: Story = {
    render: ValidationTemplate,
    args: {
        lazy: false,
        required: true,
    },
};

export const LazyValidation: Story = {
    render: ValidationTemplate,
    args: {
        lazy: true,
        required: true,
    },
};

// endregion
