import {Meta, StoryObj} from '@storybook/react';

import {CSSProperties, useState} from 'react';
import rule from '~/tks/component/common/validator/TValidatorRule';
import useInputState from '~/tks/component/common/hook/UseInputState';
import TButton from '~/tks/component/button/button/TButton';
import useRefs from '~/tks/component/common/hook/UseRefs';
import TTextArea from '~/tks/component/input/text-area/TTextArea';
import {TTextAreaProps} from '~/tks/component/input/text-area/TTextArea.interface';

const meta: Meta<typeof TTextArea> = {
    title: 'Input/TTextArea',
    component: TTextArea,
};
export default meta;

type Story = StoryObj<typeof TTextArea>;


// region [Normal]

const NormalTemplate = (args: TTextAreaProps) => {

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
                <span style={{fontSize: '20px'}}>Normal, 일반 웹페이지</span>
                <div style={containerStyle}>
                    <TTextArea {...args} value={value} onChange={setValue} label={'무옵션'}/>
                    <TTextArea {...args} value={value} onChange={setValue} label={'Placeholder'} placeholder={'설명을 입력해주세요'}/>
                    <TTextArea {...args} value={value} onChange={setValue} label={'Counter'} counter={200}/>
                    <TTextArea {...args} value={value} onChange={setValue} label={'Read-only'} disabled/>
                    <TTextArea {...args} value={value} onChange={setValue} label={'너비-400'} width={'400px'}/>
                    <TTextArea {...args} value={value} onChange={setValue} label={'너비-300'} width={'300px'}/>
                    <TTextArea {...args} value={value} onChange={setValue} label={'너비-200'} width={'200px'}/>
                </div>
            </div>
        </div>
    </>);
};


export const Outline: Story = {
    render: NormalTemplate,
    args: {
        type: 'outline',
        rows: 4,
    },
};

export const Underline: Story = {
    render: NormalTemplate,
    args: {
        type: 'underline',
        rows: 4,
    },
};


// endregion

// region [Validation]

const ValidationTemplate = (args: TTextAreaProps) => {

    const textArea1 = useInputState('');
    const textArea2 = useInputState('');
    const textArea3 = useInputState('');
    const textArea4 = useInputState('');
    const textArea5 = useInputState('');
    const textArea6 = useInputState('');

    const [textArea1Ref, textArea2Ref, textArea3Ref, textArea4Ref, textArea5Ref, textArea6Ref] = useRefs(6);

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
        textArea1Ref.current.validate();
        textArea2Ref.current.validate();
        textArea3Ref.current.validate();
        textArea4Ref.current.validate();
        textArea5Ref.current.validate();
        textArea6Ref.current.validate();
    };

    return (<>
        <TButton main onClick={validateChildren}>검사</TButton>
        <div style={{display: 'flex', gap: '24px'}}>
            <div style={containerStyle}>


                <TTextArea {...args}
                           label={'Outline Default'}
                           rules={[
                               rule.required(),
                               rule.lengthBetween(3, 12),
                           ]}
                           {...textArea1}
                           ref={textArea1Ref}
                           placeholder={'값을 입력해 주세요'}
                           counter={12}
                />


                <TTextArea {...args}
                           label={'Outline Custom Long Message'}
                           rules={[
                               rule.required(
                                   '에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다.',
                               ),
                               rule.lengthBetween(3, 12),
                           ]}
                           {...textArea2}
                           ref={textArea2Ref}
                           counter={12}
                />


                <TTextArea {...args}
                           label={'Outline Success Message'}
                           rules={[
                               rule.required(),
                               rule.lengthBetween(3, 12),
                           ]}
                           counter={12}
                           {...textArea3}
                           ref={textArea3Ref}
                           successMessage={'사용할 수 있는 아이디입니다'}
                />


                <TTextArea {...args}
                           label={'Underline Default'}
                           rules={[
                               rule.required(),
                               rule.lengthBetween(3, 12),
                           ]}
                           counter={12}
                           {...textArea4}
                           ref={textArea4Ref}
                           type={'underline'}
                />


                <TTextArea {...args}
                           label={'Underline Custom Long Message'}
                           rules={[
                               rule.required(
                                   '에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다.',
                               ),
                               rule.lengthBetween(3, 12),
                           ]}
                           counter={12}
                           {...textArea5}
                           ref={textArea5Ref}
                           type={'underline'}
                />


                <TTextArea {...args}
                           label={'Underline Success Message'}
                           rules={[
                               rule.required(),
                               rule.lengthBetween(3, 12),
                           ]}
                           counter={12}
                           successMessage={'사용할 수 있는 아이디입니다'}
                           {...textArea6}
                           ref={textArea6Ref}
                           type={'underline'}
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
