import {Meta, StoryObj} from '@storybook/react';

import React, {useRef, useState} from 'react';
import TStepBox from '~/data-container/step-box/TStepBox';
import TStepBoxItem from '~/data-container/step-box/TStepBoxItem';
import {notify, TTextFieldRef} from '@/components';
import TTextField from '~/input/text-field/TTextField';
import TValidatorRule from '@/common/validator/TValidatorRule';
import TFormBox from '~/data-container/form-box/TFormBox';
import TFormSection from '~/data-container/form-box/TFormSection';
import TFormRow from '~/data-container/form-box/TFormRow';
import TFormItem from '~/data-container/form-box/TFormItem';
import TButton from '~/button/button/TButton';


const meta: Meta<typeof TStepBox> = {
    title: 'DataContainer/TStepBox',
    component: TStepBox,
};

export default meta;

type Story = StoryObj<typeof TStepBox>;


const Template = (args) => {

    const [stepNumber, setStepNumber] = useState<number>(1);
    const [text, setText] = useState<string>('');
    const textRef = useRef<TTextFieldRef>(null);

    return (<>

        <TStepBox value={stepNumber} onChange={setStepNumber} {...args} >
            <TStepBoxItem label={'One'}
                          content={<div>Step 1 Content</div>}
            />
            <TStepBoxItem label={'Two'}
                          content={
                              <div>
                                  Step 2 Content
                              </div>
                          }
            />
            <TStepBoxItem label={'Three'}
                          content={<>
                              <TFormBox>
                                  <TFormSection label={'Step 3 Content'} column={1}>
                                      <TFormRow>
                                          <TFormItem label={'꼭 입력해야 하는 값'} required>
                                              <TTextField value={text}
                                                          onChange={setText}
                                                          ref={textRef}
                                                          rules={[TValidatorRule.required()]}
                                              />
                                          </TFormItem>

                                      </TFormRow>
                                  </TFormSection>
                              </TFormBox>
                          </>}
                          validateStep={() => { return textRef.current?.validate() === true; }}
                          onClickNext={() => { /* */ }}
                          customNextButton={<><TButton large>Hello</TButton><TButton large>World</TButton></>}

            />
        </TStepBox>
    </>);
};


export const Default: Story = {
    render: Template,
    args: {
        prevButtonLabel: '이전',
        nextButtonLabel: '다음',
        completeButtonLabel: '저장하기',
    },
};
