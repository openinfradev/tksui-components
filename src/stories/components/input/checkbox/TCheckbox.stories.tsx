import {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import useInputState from '~/tks/component/common/hook/UseInputState';

import TCheckbox from '~/tks/component/input/checkbox/TCheckbox';
import {TCheckboxProps} from '~/tks/component/input/checkbox/TCheckbox.interface';
import TButton from '~/tks/component/button/button/TButton';
import TValidatorRule from '~/tks/component/common/validator/TValidatorRule';
import useRefs from '~/tks/component/common/hook/UseRefs';

const meta: Meta<typeof TCheckbox> = {
    title: 'Input/TCheckbox',
    component: TCheckbox,
};

export default meta;

type Story = StoryObj<typeof TCheckbox>;


// region [Normal]

const NormalTemplate = (args: TCheckboxProps) => {

    const checkbox1 = useInputState(false);
    const checkbox2 = useInputState('N');
    const checkbox3 = useInputState(true);
    const checkbox4 = useInputState(false);

    const checkbox5 = useInputState(false);
    const [checkbox5Indeterminate, setCheckbox5Indeterminate] = useState(true);

    function onChangeCheckbox5(value: boolean) {
        checkbox5.onChange(value);
        setCheckbox5Indeterminate(false);
    }


    return (<>
        Boolean Value(value: {checkbox1.value.toString()})
        <TCheckbox {...args} onChange={checkbox1.onChange} value={checkbox1.value}>사과</TCheckbox>

        Custom Value(value: {checkbox2.value.toString()})
        <TCheckbox {...args} onChange={checkbox2.onChange} value={checkbox2.value} positiveValue={'Y'} negativeValue={'N'}>파인애플</TCheckbox>

        Disabled checked (value: {checkbox3.value.toString()})
        <TCheckbox {...args} disabled onChange={checkbox3.onChange} value={checkbox3.value}>바나나</TCheckbox>

        Disabled unchecked (value: {checkbox4.value.toString()})
        <TCheckbox {...args} disabled onChange={checkbox4.onChange} value={checkbox4.value}>귤</TCheckbox>

        Indeterminate (value: {checkbox5.value.toString()})
        <TCheckbox {...args} onChange={onChangeCheckbox5} value={checkbox5.value} indeterminate={checkbox5Indeterminate}>수박</TCheckbox>
    </>);
};


export const Default: Story = {
    render: NormalTemplate,
};


// endregion


// region [Validation]

const ValidationTemplate = (args: TCheckboxProps) => {

    const checkbox1 = useInputState(false);
    const checkbox2 = useInputState(false);
    const [checkbox1Ref, checkbox2Ref] = useRefs(2);

    function validateAll() {
        checkbox1Ref.current.validate();
        checkbox2Ref.current.validate();
    }

    return (<>
        <TCheckbox {...args}
                   ref={checkbox1Ref}
                   onChange={checkbox1.onChange}
                   value={checkbox1.value}
                   rules={[TValidatorRule.equal(true, '약관에 동의하지 않으시면 서비스 이용이 불가합니다')]}
                   successMessage={'약관에 동의하셨습니다'}>
            약관을 읽고, 동의합니다. (성공, 실패 메시지 표시)
        </TCheckbox>
        <br/>

        <TCheckbox {...args}
                   ref={checkbox2Ref}
                   onChange={checkbox2.onChange}
                   value={checkbox2.value}
                   rules={[TValidatorRule.equal(true, '약관에 동의하지 않으시면 서비스 이용이 불가합니다')]}>
            약관을 읽고, 동의합니다. (실패 메시지 표시)
        </TCheckbox>
        <br/>
        <TButton main onClick={validateAll}>회원 가입</TButton>
    </>);
};


export const Validation: Story = {
    render: ValidationTemplate,
    args: {
        lazy: false,
    },
};

export const LazyValidation = {
    render: ValidationTemplate,
    args: {
        lazy: true,
    },
};

// endregion
