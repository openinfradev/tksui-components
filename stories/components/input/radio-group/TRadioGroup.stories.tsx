import {Meta, StoryObj} from '@storybook/react';
import useInputState from '@/common/hook/UseInputState';
import TRadioGroup from '@/components/input/radio-group/TRadioGroup';
import {TRadioGroupProps, TRadioGroupValue} from '@/components/input/radio-group/TRadioGroup.interface';
import useRefs from '@/common/hook/UseRefs';
import TButton from '@/components/button/button/TButton';
import TValidatorRule from '@/common/validator/TValidatorRule';


const meta: Meta<typeof TRadioGroup> = {
    title: 'Input/TRadioGroup',
    component: TRadioGroup,

};
export default meta;

type Story = StoryObj<typeof TRadioGroup>;

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

    const radioGroup1 = useInputState<TRadioGroupValue>('a');
    const radioGroup2 = useInputState<TRadioGroupValue>('banana');
    const radioGroup3 = useInputState<TRadioGroupValue>('disabled');


    return (<>
        Value Key 예제: {radioGroup1.value} <br/><br/>
        <TRadioGroup value={radioGroup1.value}
                     onChange={radioGroup1.onChange}
                     items={items}
                     valueKey={'value2'}
        />
        <br/><br/><br/>

        Text Key 예제: {radioGroup2.value} <br/><br/>
        <TRadioGroup value={radioGroup2.value}
                     onChange={radioGroup2.onChange}
                     items={items}
                     textKey={'koreanText'}
        />
        <br/><br/><br/>

        Label Template: {radioGroup3.value} <br/><br/>
        <TRadioGroup value={radioGroup3.value}
                     onChange={radioGroup3.onChange}
                     items={items}
                     labelTemplate={(item) => `${item.koreanText} (${item.text})`}
        />
        <br/>

    </>);
};


export const Default = {
    render: NormalTemplate,
};


// endregion


// region [Validation]

const ValidationTemplate = (args: TRadioGroupProps) => {

    const radioGroup1 = useInputState<TRadioGroupValue>('');
    const radioGroup2 = useInputState<TRadioGroupValue>('');

    const [checkboxGroup1Ref, checkboxGroup2Ref] = useRefs(2);

    function validateAll() {
        checkboxGroup1Ref.current.validate();
        checkboxGroup2Ref.current.validate();
    }

    return (<>
        <TButton main onClick={validateAll}>검사</TButton>
        <br/><br/><br/><br/>

        실패메시지 표시<br/><br/>
        <TRadioGroup {...args}
                     ref={checkboxGroup1Ref}
                     value={radioGroup1.value}
                     onChange={radioGroup1.onChange}
                     items={items}
                     valueKey={'value2'}
                     rules={[TValidatorRule.requiredArr('가장 좋아하는 과일을 선택해 주세요')]}
        />

        <br/><br/>

        성공, 실패메시지 표시<br/><br/>
        <TRadioGroup {...args}
                     ref={checkboxGroup2Ref}
                     value={radioGroup2.value}
                     onChange={radioGroup2.onChange}
                     items={items}
                     valueKey={'value2'}
                     rules={[TValidatorRule.requiredArr('가장 좋아하는 과일을 선택해 주세요')]}
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

