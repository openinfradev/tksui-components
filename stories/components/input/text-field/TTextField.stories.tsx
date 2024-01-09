import {Meta, StoryObj} from '@storybook/react';

import {CSSProperties, useState} from 'react';
import TTextField from '@/components/input/text-field/TTextField';
import {TTextFieldProps} from '@/components/input/text-field/TTextField.interface';
import rule from '@/common/validator/TValidatorRule';
import useInputState from '@/common/hook/UseInputState';
import TButton from '@/components/button/button/TButton';
import useRefs from '@/common/hook/UseRefs';


const meta: Meta<typeof TTextField> = {
    title: 'Input/TTextField',
    component: TTextField,
};
export default meta;

type Story = StoryObj<typeof TTextField>;


// region [Normal]

const NormalTemplate = (args: TTextFieldProps) => {

    const [value, setValue] = useState('');

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
            <div>
                <span style={{fontSize: '20px'}}>Normal</span>
                <div style={containerStyle}>
                    <TTextField {...args} value={value} onChange={setValue} label={'무옵션'}/>
                    <TTextField {...args} value={value} onChange={setValue} label={'Clearable'} clearable/>
                    <TTextField {...args} value={value} onChange={setValue} label={'Required'} required/>
                    <TTextField {...args} value={value} onChange={setValue} label={'Password'} password clearable/>
                    <TTextField {...args} value={value} onChange={setValue} label={'Searchable'} searchable placeholder={'검색어를 입력해주세요'}
                                clearable/>
                    <TTextField {...args} value={value} onChange={setValue} label={'Counter'} counter={20}/>
                    <TTextField {...args} value={value} onChange={setValue} label={'Guide Message'} hint={'개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다.'}/>
                    <TTextField {...args} value={'입력 불가능한 값'} label={'Disabled'} disabled/>
                    <TTextField {...args} value={'읽을 수만 있는 값'} label={'Read-only'} readOnly/>
                    <TTextField {...args} value={value} onChange={setValue} label={'너비-400'} width={'400px'}/>
                    <TTextField {...args} value={value} onChange={setValue} label={'너비-300'} width={'300px'}/>
                    <TTextField {...args} value={value} onChange={setValue} label={'너비-200'} width={'200px'}/>
                </div>
            </div>
        </div>
    </>);
};

export const Underline: Story = {
    render: NormalTemplate,
    args: {
        label: 'Hello World',
    },
};


// endregion


// region [Trim]

const TrimTemplate = (args: TTextFieldProps) => {

    const [trimValue, setTrimValue] = useState('');
    const [noTrimValue, setNoTrimValue] = useState('');

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
            <div>
                <span style={{fontSize: '20px'}}>Normal, 일반 웹페이지</span>
                <div style={containerStyle}>
                    <TTextField {...args} value={trimValue} onChange={setTrimValue} label={'Trim (Default)'} counter={20}/>
                    <TTextField {...args} value={noTrimValue} onChange={setNoTrimValue} label={'No Trim'} noTrim counter={20}/>
                </div>
            </div>
        </div>
    </>);
};


export const Trim = {
    render: TrimTemplate,
    args: {
        type: 'outline',
    },
};


// endregion


// region [Validation]

const ValidationTemplate = (args: TTextFieldProps) => {

    const textField1 = useInputState('');
    const textField2 = useInputState('');
    const textField3 = useInputState('');
    const textField4 = useInputState('');
    const textField5 = useInputState('');
    const textField6 = useInputState('');

    const [textField1Ref, textField2Ref, textField3Ref, textField4Ref, textField5Ref, textField6Ref] = useRefs(6);

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
        textField3Ref.current.validate();
        textField4Ref.current.validate();
        textField5Ref.current.validate();
        textField6Ref.current.validate();
    };

    return (<>
        <TButton main onClick={validateChildren}>검사</TButton>
        <div style={{display: 'flex', gap: '24px'}}>
            <div style={containerStyle}>


                <TTextField {...args}
                            label={'Outline Default'}
                            rules={[
                                rule.required(),
                                rule.lengthBetween(3, 12),
                            ]}
                            {...textField1}
                            ref={textField1Ref}
                            placeholder={'값을 입력해 주세요'}
                            counter={12}
                />
                <TTextField {...args}
                            label={'Outline Custom Long Message'}
                            rules={[
                                rule.required(
                                    '에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다.',
                                ),
                                rule.lengthBetween(3, 12),
                            ]}
                            {...textField2}
                            ref={textField2Ref}
                            counter={12}
                />
                <TTextField {...args}
                            label={'Outline Success Message'}
                            rules={[
                                rule.required(),
                                rule.lengthBetween(3, 12),
                            ]}
                            counter={12}
                            {...textField3}
                            ref={textField3Ref}
                            successMessage={'사용할 수 있는 아이디입니다'}
                />
                <TTextField {...args}
                            label={'Underline Default'}
                            rules={[
                                rule.required(),
                                rule.lengthBetween(3, 12),
                            ]}
                            counter={12}
                            {...textField4}
                            ref={textField4Ref}
                />
                <TTextField {...args}
                            label={'Underline Custom Long Message'}
                            rules={[
                                rule.required(
                                    '에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다.',
                                ),
                                rule.lengthBetween(3, 12),
                            ]}
                            counter={12}
                            {...textField5}
                            ref={textField5Ref}
                />
                <TTextField {...args}
                            label={'Underline Success Message'}
                            rules={[
                                rule.required(),
                                rule.lengthBetween(3, 12),
                            ]}
                            counter={12}
                            successMessage={'사용할 수 있는 아이디입니다'}
                            {...textField6}
                            ref={textField6Ref}
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
