import {Meta, StoryObj} from '@storybook/react';
import useInputState from '~/tks/component/common/hook/UseInputState';
import useRefs from '~/tks/component/common/hook/UseRefs';
import TCheckboxGroup from '~/tks/component/input/checkbox-group/TCheckboxGroup';
import {TCheckboxGroupValue} from '~/tks/component/input/checkbox-group/TCheckboxGroup.interface';
import TValidatorRule from '~/tks/component/common/validator/TValidatorRule';
import TButton from '~/tks/component/button/button/TButton';


const meta: Meta<typeof TCheckboxGroup> = {
    title: 'Input/TCheckboxGroup',
    component: TCheckboxGroup,
};
export default meta;

type Story = StoryObj<typeof TCheckboxGroup>;

const items = [
    {text: 'Apple', koreanText: '사과', value: 'apple', value2: 'a'},
    {text: 'Banana', koreanText: '바나나', value: 'banana', value2: 'b'},
    {text: 'Mango', koreanText: '망고', value: 'mango', value2: 'm'},
    {text: 'Peach', koreanText: '복숭아', value: 'peach', value2: 'p'},
    {text: 'Water melon', koreanText: '수박', value: 'watermelon', value2: 'w'},
    {text: 'Melon', koreanText: '멜론', value: 'melon', value2: 'm2'},
    {text: 'Durian', koreanText: '두리안', value: 'durian', value2: 'd1', disabled: true},
    {text: 'Disabled', koreanText: '선택 불가 과일', value: 'disabled', value2: 'd2', disabled: true},
];

// region [Normal]

const NormalTemplate = () => {

    const checkboxGroup1 = useInputState<TCheckboxGroupValue>([]);
    const checkboxGroup2 = useInputState<TCheckboxGroupValue>([]);
    const checkboxGroup3 = useInputState<TCheckboxGroupValue>([]);


    return (<>
        Value Key 예제: {checkboxGroup1.value.join(', ')} <br/><br/>
        <TCheckboxGroup value={checkboxGroup1.value}
                        onChange={checkboxGroup1.onChange}
                        items={items}
                        valueKey={'value2'}
        />
        <br/><br/><br/>

        Text Key 예제: {checkboxGroup2.value.join(', ')} <br/><br/>
        <TCheckboxGroup value={checkboxGroup2.value}
                        onChange={checkboxGroup2.onChange}
                        items={items}
                        textKey={'koreanText'}
        />
        <br/><br/><br/>

        Label Template: {checkboxGroup3.value.join(', ')} <br/><br/>
        <TCheckboxGroup value={checkboxGroup3.value}
                        onChange={checkboxGroup3.onChange}
                        items={items}
                        labelTemplate={(item) => `${item.koreanText} (${item.text})`}
        />
        <br/>

    </>);
};


export const Default: Story = {
    render: NormalTemplate,
};


// endregion


// region [Validation]

const ValidationTemplate = (args) => {

    const checkboxGroup1 = useInputState<TCheckboxGroupValue>([]);
    const checkboxGroup2 = useInputState<TCheckboxGroupValue>([]);

    const [checkboxGroup1Ref, checkboxGroup2Ref] = useRefs(2);

    function validateAll() {
        checkboxGroup1Ref.current.validate();
        checkboxGroup2Ref.current.validate();
    }

    return (<>
        <TButton main onClick={validateAll}>검사</TButton>
        <br/><br/><br/><br/>

        실패메시지 표시<br/><br/>
        <TCheckboxGroup {...args}
                        ref={checkboxGroup1Ref}
                        value={checkboxGroup1.value}
                        onChange={checkboxGroup1.onChange}
                        items={items}
                        valueKey={'value2'}
                        rules={[TValidatorRule.requiredArr('과일을 1개 이상 선택해 주세요')]}
        />

        <br/><br/>

        성공, 실패메시지 표시<br/><br/>
        <TCheckboxGroup {...args}
                        ref={checkboxGroup2Ref}
                        value={checkboxGroup2.value}
                        onChange={checkboxGroup2.onChange}
                        items={items}
                        valueKey={'value2'}
                        rules={[TValidatorRule.requiredArr('과일을 1개 이상 선택해 주세요')]}
                        successMessage={'드디어 과일을 선택하셨군요!'}
        />
    </>);
};


export const Validation: Story = {
    render: ValidationTemplate,
    args: {
        lazy: false,
    },
};

export const LazyValidation: Story = {
    render: ValidationTemplate,
    args: {
        lazy: true,
    },
};

// endregion
