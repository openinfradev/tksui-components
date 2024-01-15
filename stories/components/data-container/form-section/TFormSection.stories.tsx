import {Meta, StoryObj} from '@storybook/react';
import TButton from '@/components/button/button/TButton';
import TFormSection from '@/components/data-container/form-section/TFormSection';
import TFormSectionRow from '~/data-container/form-section/TFormSectionRow';
import TFormSectionItem from '@/components/data-container/form-section/TFormSectionItem';
import {TFormSectionProps} from '~/data-container/form-section';

import TTextField from '@/components/input/text-field/TTextField';
import useInputState from '@/common/hook/UseInputState';
import TDropdown from '@/components/input/dropdown/TDropdown';
import TToast, {notify} from '@/components/guide/toast/TToast';
import TTextArea from '~/input/text-area/TTextArea';


const meta: Meta<typeof TFormSection> = {
    title: 'DataContainer/TFormSection',
    component: TFormSection,
};
export default meta;

type Story = StoryObj<typeof TFormSection>;


const Template = (args: TFormSectionProps) => {

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
            <TFormSection label={'Basic Properties'} column={2} {...args} customInformation={<>앱 생성 양식 예제입니다.</>}
                          leftAction={leftAction()} rightAction={rightAction()}>
                <TFormSectionRow>
                    <TFormSectionItem label={'Name'} required>
                        <TTextField counter={30} {...name} />
                    </TFormSectionItem>
                    <TFormSectionItem label={'Version'} required>
                        <TTextField counter={20} {...version} />
                    </TFormSectionItem>
                </TFormSectionRow>
                <TFormSectionRow>
                    <TFormSectionItem label={'Description'} span={2}>
                        <TTextField counter={300} {...description} />
                    </TFormSectionItem>
                </TFormSectionRow>
            </TFormSection>

            <TFormSection label={'Properties'} column={2} information={'컨트롤플레인 노드는 이런겁니다.\n인프라 노드는 이런겁니다.\n사용자 노드는 이런겁니다.'}>
                <TFormSectionRow>
                    <TFormSectionItem label={'Artifact URL'} required information={'form item에 설명이 필요하면 \n information 기능을 사용하면 됩니다.'}>
                        <TTextField {...artifactUrl} />
                    </TFormSectionItem>
                    <TFormSectionItem label={'Port'}>
                        <TTextField counter={20} {...port} placeholder={'123.123.123.123'}/>
                    </TFormSectionItem>
                </TFormSectionRow>

                <TFormSectionRow>
                    <TFormSectionItem label={'Profile'}>
                        <TTextField counter={20} {...profile} />
                    </TFormSectionItem>
                    <TFormSectionItem label={'Resource Spec'}>
                        <TDropdown items={resourceSpecItems} {...resourceSpec} />
                    </TFormSectionItem>
                </TFormSectionRow>
            </TFormSection>

            <TFormSection label={'Properties'} column={2}>
                <TFormSectionRow>
                    <TFormSectionItem label={'Artifact URL'} required>
                        <TTextField {...artifactUrl} />
                    </TFormSectionItem>
                    <TFormSectionItem label={'Port'}>
                        <TTextField counter={20} {...port} placeholder={'123.123.123.123'}/>
                    </TFormSectionItem>
                </TFormSectionRow>

                <TFormSectionRow>
                    <TFormSectionItem label={'Profile'}>
                        <TTextField counter={20} {...profile} />
                    </TFormSectionItem>
                    <TFormSectionItem label={'Resource Spec'}>
                        <TDropdown items={resourceSpecItems} {...resourceSpec} />
                    </TFormSectionItem>
                </TFormSectionRow>

                <TFormSectionRow>
                    <TFormSectionItem label={'Description'} span={2}>
                        <TTextArea counter={100} {...profile} />
                    </TFormSectionItem>
                </TFormSectionRow>
            </TFormSection>
        </>
    );
};

export const Default: Story = {
    render: Template,
};
