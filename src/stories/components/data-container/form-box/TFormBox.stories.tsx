import {Meta, StoryObj} from '@storybook/react';
import TButton from '~/tks/component/button/button/TButton';
import TFormBox from '~/tks/component/data-container/form-box/TFormBox';
import {TFormBoxProps} from '~/tks/component/data-container/form-box/TFormBox.interface';

import TFormSection from '~/tks/component/data-container/form-box/TFormSection';
import TFormRow from '~/tks/component/data-container/form-box/TFormRow';
import TFormItem from '~/tks/component/data-container/form-box/TFormItem';
import TTextField from '~/tks/component/input/text-field/TTextField';
import useInputState from '~/tks/component/common/hook/UseInputState';
import TDropdown from '~/tks/component/input/dropdown/TDropdown';
import TToast, {notify} from '~/tks/component/guide/toast/TToast';


const meta: Meta<typeof TFormBox> = {
    title: 'DataContainer/TFormBox',
    component: TFormBox,
};
export default meta;

type Story = StoryObj<typeof TFormBox>;


const Template = (args: TFormBoxProps) => {

    const name = useInputState('');
    const version = useInputState('');
    const description = useInputState('');
    const artifactUrl = useInputState('');
    const port = useInputState('');
    const profile = useInputState('');
    const resourceSpec = useInputState('');


    const leftAction = () => (
        <TButton onClick={() => notify.info('목록 돌아가기 이벤트 발생')}>목록</TButton>
    );
    const rightAction = () => (<>
        <TButton onClick={() => notify.info('취소 이벤트 발생')}>취소</TButton>
        <TButton main onClick={() => notify.info('저장 이벤트 발생')}>저장</TButton>
    </>);

    const resourceSpecItems = [
        {text: 'Tiny', value: 't'},
        {text: 'Medium', value: 'm'},
        {text: 'Large', value: 'l'},
    ];

    return (
        <>

            <TToast/>
            <TFormBox leftAction={leftAction()}
                      rightAction={rightAction()}
                      {...args}>
                <TFormSection label={'Basic Properties'}
                              column={2}
                              information={'앱 생성 양식 예제입니다.'}>
                    <TFormRow>
                        <TFormItem label={'Name'} required>
                            <TTextField counter={30} {...name} />
                        </TFormItem>
                        <TFormItem label={'Version'} required>
                            <TTextField counter={20} {...version} />
                        </TFormItem>
                    </TFormRow>
                    <TFormRow>
                        <TFormItem label={'Description'} span={2}>
                            <TTextField counter={300} {...description} />
                        </TFormItem>
                    </TFormRow>
                </TFormSection>

                <TFormSection label={'Properties'} column={2}>
                    <TFormRow>
                        <TFormItem label={'Artifact URL'} required>
                            <TTextField {...artifactUrl} />
                        </TFormItem>
                        <TFormItem label={'Port'}>
                            <TTextField counter={20} {...port} placeholder={'123.123.123.123'}/>
                        </TFormItem>
                    </TFormRow>

                    <TFormRow>
                        <TFormItem label={'Profile'}>
                            <TTextField counter={20} {...profile} />
                        </TFormItem>
                        <TFormItem label={'Resource Spec'}>
                            <TDropdown items={resourceSpecItems} {...resourceSpec} />
                        </TFormItem>
                    </TFormRow>
                </TFormSection>
            </TFormBox>
        </>
    );
};


export const Default: Story = {
    render: Template,
};

