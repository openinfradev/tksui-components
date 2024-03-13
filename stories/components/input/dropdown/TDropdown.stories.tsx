import {Meta, StoryObj} from '@storybook/react';

import {CSSProperties} from 'react';
import useInputState from '@/common/hook/UseInputState';
import TDropdown from '@/components/input/dropdown/TDropdown';
import {TDropdownProps} from '@/components/input/dropdown/TDropdown.interface';
import useRefs from '@/common/hook/UseRefs';
import rule from '@/common/validator/TValidatorRule';
import TButton from '@/components/button/button/TButton';


const meta: Meta<typeof TDropdown> = {
    title: 'Input/TDropdown',
    component: TDropdown,
};

export default meta;

type Story = StoryObj<typeof TDropdown>;


// region [Normal]

const NormalTemplate = (args: TDropdownProps) => {

    const singleSelect1 = useInputState<string>('');
    const singleSelect2 = useInputState<string>('melon');
    const singleSelect3 = useInputState<string>('melon');
    const singleSelect4 = useInputState<string>('');
    const singleSelect5 = useInputState<string>('');
    const singleSelect6 = useInputState<string>('');
    const singleSelect7 = useInputState<string>('');
    const singleSelect8 = useInputState<string>('');
    const singleSelect9 = useInputState<string>('');

    const multiSelect1 = useInputState<any[]>([]);
    const multiSelect2 = useInputState<any[]>(['melon', 'banana']);
    const multiSelect3 = useInputState<any[]>([]);
    const multiSelect4 = useInputState<any[]>([]);
    const multiSelect5 = useInputState<any[]>([]);
    const multiSelect6 = useInputState<any[]>([]);
    const multiSelect7 = useInputState<any[]>([]);
    const multiSelect8 = useInputState<any[]>([]);

    const containerStyle: CSSProperties = {
        width: '500px',
        border: '1px solid lightgray',
        padding: '16px',
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    };


    return (<>
        <div style={{display: 'flex', gap: '24px'}}>
            <div>
                <span style={{fontSize: '20px'}}>단건 선택</span>
                <div style={containerStyle}>
                    default - No Data
                    <TDropdown items={[]} value={''} onChange={singleSelect1.onChange} />

                    default (value: {singleSelect1.value})
                    <TDropdown {...args} {...singleSelect1} />

                    readOnly (value: {singleSelect2.value})
                    <TDropdown {...args} {...singleSelect2} disabled/>

                    placeholder (value: {singleSelect3.value})
                    <TDropdown {...args} {...singleSelect3} placeholder={'Choose your favorite fruit'}/>

                    textKey (value: {singleSelect4.value})
                    <TDropdown {...args} {...singleSelect4} placeholder={'좋아하는 과일을 선택해주세요'} textKey={'koreanText'}/>

                    valueKey (value: {singleSelect5.value})
                    <TDropdown {...args} {...singleSelect5} valueKey={'value2'}/>

                    itemTemplate (value: {singleSelect6.value})
                    <TDropdown {...args} {...singleSelect6} itemTemplate={(item) => `${item.text} (${item.koreanText})`}/>

                    Dense (value: {singleSelect7.value})
                    <TDropdown {...args} {...singleSelect7} dense/>

                    width 300px (value: {singleSelect8.value})
                    <TDropdown {...args} {...singleSelect8} width={'300px'}/>

                    Clearable (value: {singleSelect8.value})
                    <TDropdown {...args} noClearButton {...singleSelect9} />
                </div>
            </div>

            <div>
                <span style={{fontSize: '20px'}}>다건 선택</span>
                <div style={containerStyle}>
                    default - No Data
                    <TDropdown items={[]} value={''} onChange={singleSelect1.onChange} />

                    default (value: {multiSelect1.value.join(', ')})
                    <TDropdown {...args} {...multiSelect1} multiple/>

                    readOnly (value: {multiSelect2.value})
                    <TDropdown {...args} {...multiSelect2} multiple disabled/>

                    placeholder (value: {multiSelect3.value.join(', ')})
                    <TDropdown {...args} {...multiSelect3} multiple filterPlaceholder={'Choose your favorite fruits'}/>

                    textKey (value: {multiSelect4.value.join(', ')})
                    <TDropdown {...args} {...multiSelect4} multiple filterPlaceholder={'좋아하는 과일들을 선택해주세요'} textKey={'koreanText'}/>

                    valueKey (value: {multiSelect5.value.join(', ')})
                    <TDropdown {...args} {...multiSelect5} multiple valueKey={'value2'}/>

                    itemTemplate (value: {multiSelect6.value.join(', ')})
                    <TDropdown {...args} {...multiSelect6} multiple itemTemplate={(item) => `${item.text} (${item.koreanText})`}/>

                    Dense (value: {multiSelect7.value})
                    <TDropdown {...args} {...multiSelect7} multiple dense/>

                    width 300px (value: {multiSelect8.value})
                    <TDropdown {...args} {...multiSelect8} multiple width={'300px'}/>
                </div>
            </div>
        </div>
    </>);
};

const ValidationTemplate = (args: TDropdownProps) => {

    const singleSelect1 = useInputState<string>('');
    const singleSelect2 = useInputState<string>('melon');
    const singleSelect3 = useInputState<string>('');
    const singleSelect4 = useInputState<string>('');

    const multiSelect1 = useInputState<any[]>([]);
    const multiSelect2 = useInputState<any[]>(['melon', 'banana']);
    const multiSelect3 = useInputState<any[]>([]);
    const multiSelect4 = useInputState<any[]>([]);

    const [singleSelect1Ref, singleSelect2Ref, singleSelect3Ref, singleSelect4Ref,
        multiSelect1Ref, multiSelect2Ref, multiSelect3Ref, multiSelect4Ref] = useRefs(8);

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
        singleSelect1Ref.current.validate();
        singleSelect2Ref.current.validate();
        singleSelect3Ref.current.validate();
        singleSelect4Ref.current.validate();
        multiSelect1Ref.current.validate();
        multiSelect2Ref.current.validate();
        multiSelect3Ref.current.validate();
        multiSelect4Ref.current.validate();
    };


    return (<>
        <div style={{display: 'flex', gap: '24px'}}>
            <div>
                <TButton main onClick={validateChildren}>검사</TButton>
                <div style={containerStyle}>
                    default (value: {singleSelect1.value})
                    <TDropdown ref={singleSelect1Ref} rules={[rule.required()]} {...args} {...singleSelect1} />

                    readOnly (value: {singleSelect2.value})
                    <TDropdown ref={singleSelect2Ref} rules={[rule.required()]} {...args} {...singleSelect2} disabled/>

                    placeholder (value: {singleSelect3.value})
                    <TDropdown ref={singleSelect3Ref} rules={[rule.required()]} {...args} {...singleSelect3}
                               filterPlaceholder={'Choose your favorite fruit'}/>

                    dense (value: {singleSelect4.value})
                    <TDropdown ref={singleSelect4Ref} rules={[rule.required()]} {...args} {...singleSelect4} dense/>

                    default (value: {multiSelect1.value.join(', ')})
                    <TDropdown ref={multiSelect1Ref} rules={[rule.requiredArr()]} {...args} type={'underline'} {...multiSelect1} multiple/>

                    readOnly (value: {multiSelect2.value})
                    <TDropdown ref={multiSelect2Ref} rules={[rule.requiredArr()]} {...args} type={'underline'} {...multiSelect2} multiple
                               disabled/>

                    placeholder (value: {multiSelect3.value.join(', ')})
                    <TDropdown ref={multiSelect3Ref} rules={[rule.requiredArr()]} {...args} type={'underline'} {...multiSelect3} multiple
                               filterPlaceholder={'Choose your favorite fruits'}/>

                    dense (value: {multiSelect4.value})
                    <TDropdown ref={multiSelect4Ref} rules={[rule.requiredArr()]} {...args} type={'underline'} {...multiSelect4} multiple dense/>

                </div>
            </div>
        </div>
    </>);
};


const items = [
    {text: 'Apple', koreanText: '사과', value: 'apple', value2: 'a'},
    {text: 'Banana', koreanText: '바나나', value: 'banana', value2: 'b'},
    {text: 'Mango', koreanText: '망고', value: 'mango', value2: 'm'},
    {text: 'Peach', koreanText: '복숭아', value: 'peach', value2: 'p'},
    {text: 'Water melon', koreanText: '수박', value: 'watermelon', value2: 'w'},
    {text: 'Melon', koreanText: '멜론', value: 'melon', value2: 'm2'},
];

export const Outline: Story = {
    render: NormalTemplate,
    args: {
        items,
        type: 'outline',
    },
};

export const Underline: Story = {
    render: NormalTemplate,
    args: {
        items,
        type: 'underline',
    },
};

export const Validation: Story = {
    render: ValidationTemplate,
    args: {
        items,
        lazy: false,
    },
};

export const LazyValidation: Story = {
    render: ValidationTemplate,
    args: {
        items,
        lazy: true,
    },
};


// endregion

