import {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import TInputValidationHint from '~/tks/component/guide/input-validation-hint/TInputValidationHint';
import TTextField from '~/tks/component/input/text-field/TTextField';


const meta: Meta<typeof TInputValidationHint> = {
    title: 'Guide/TInputValidationHint',
    component: TInputValidationHint,
};

export default meta;
type Story = StoryObj<typeof TInputValidationHint>;


const Template = () => {

    const [targetValue, setTargetValue] = useState<string>('');


    return (<>
        <TTextField value={targetValue} onChange={setTargetValue} width={'300px'} counter={16} password/>

        <br/><br/><br/><br/>
        <TInputValidationHint value={targetValue}
                              description={'다음 요건에 맞는 비밀번호를 입력해 주세요.'}
                              rules={[
                                  {rule: (v) => (v.length >= 8 && v.length <= 16), description: '8자에서 16자 사이로 입력해 주세요.'},
                                  {
                                      rule: (v) => (/^[a-zA-Z0-9!@#$%^&*()+=_-]*$/.test(v)),
                                      description: '영문 대 소문자, 숫자, 특수문자(!@#$%%^&*()+=_-)만 입력해 주세요.',
                                  },
                              ]}
        />
    </>
    );
};


export const Default: Story = {
    render: Template,
};

