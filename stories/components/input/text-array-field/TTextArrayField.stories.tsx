import {Meta, StoryObj} from '@storybook/react';

import {useRef, useState} from 'react';
import rule from '@/common/validator/TValidatorRule';
import {TTextArrayField, TTextArrayFieldProps, TTextArrayFieldRef} from '~/input/text-array-field';
import {TButton} from '@/components';


const meta: Meta<typeof TTextArrayField> = {
    title: 'Input/TTextArrayField',
    component: TTextArrayField,
};
export default meta;

type Story = StoryObj<typeof TTextArrayField>;

// region [Normal]


// region [Validation]

const ValidationTemplate = (args: TTextArrayFieldProps) => {

    const [value, setValue] = useState<string[]>([]);

    const textArrayFieldRef = useRef<TTextArrayFieldRef>(null);

    const validateChildren = () => {
        textArrayFieldRef.current.validate();
    };

    return (<>
        <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>

            <TButton main width={'80px'} onClick={validateChildren}>검사</TButton>

            <TTextArrayField {...args}
                             rules={[rule.requiredArr('필수값 입니다.')]}
                             value={value}
                             onChange={setValue}
                             placeholder={'값을 입력하고 엔터를 눌러주세요.'}
                             ref={textArrayFieldRef}
            />

        </div>
    </>);
};


export const Validation: Story = {
    render: ValidationTemplate,
    args: {},
};
// endregion
