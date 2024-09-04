import {Meta, StoryObj} from '@storybook/react';
import {useCallback, useMemo, useRef, useState} from 'react';
import TButton from '@/components/button/button/TButton';
import TFormSection from '@/components/data-container/form-section/TFormSection';
import TFormSectionRow from '~/data-container/form-section/TFormSectionRow';
import TFormSectionItem from '@/components/data-container/form-section/TFormSectionItem';
import {TFormSectionProps} from '~/data-container/form-section';

import TTextField from '@/components/input/text-field/TTextField';
import TDropdown from '@/components/input/dropdown/TDropdown';
import TToast, {notify} from '@/components/guide/toast/TToast';
import {TDropdownRef, TTextFieldRef} from '@/components';
import TValidatorRule from '@/common/validator/TValidatorRule';


const meta: Meta<typeof TFormSection> = {
    title: 'DataContainer/TFormSection',
    component: TFormSection,
};
export default meta;

type Story = StoryObj<typeof TFormSection>;


const resourceSpecItems = [
    {text: 'Tiny', value: 't'},
    {text: 'Medium', value: 'm'},
    {text: 'Large', value: 'l'},
];


const Template = (args: TFormSectionProps) => {

    const [artifactUrl, setArtifactUrl] = useState<string>('');
    const [ip, setIp] = useState<string>('');
    const [port, setPort] = useState<string>('');
    const [profile, setProfile] = useState<string>('');
    const [resourceSpec, setResourceSpec] = useState<string>('');


    return (
        <>
            <TToast/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>

                <TFormSection
                    {...args}
                    label={'Properties'}
                    column={3}
                    information={'컨트롤플레인 노드는 이런겁니다.\n인프라 노드는 이런겁니다.\n사용자 노드는 이런겁니다.'}
                >
                    <TFormSectionRow>
                        <TFormSectionItem
                            label={'Artifact URL'}
                            required
                            information={'form item에 설명이 필요하면 \n information 기능을 사용하면 됩니다.'}>
                            <TTextField value={artifactUrl} onChange={setArtifactUrl} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'IP'}>
                            <TTextField counter={20} value={ip} onChange={setIp} placeholder={'123.123.123.123'}/>
                        </TFormSectionItem>
                        <TFormSectionItem label={'Port'}>
                            <TTextField counter={5} value={port} onChange={setPort} placeholder={'8080'}/>
                        </TFormSectionItem>
                    </TFormSectionRow>

                    <TFormSectionRow>
                        <TFormSectionItem label={'Profile'}>
                            <TTextField counter={20} value={profile} onChange={setProfile} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'Resource Spec'} span={2}>
                            <TDropdown items={resourceSpecItems} value={resourceSpec} onChange={setResourceSpec} />
                        </TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>
            </div>
        </>
    );
};

export const Default: Story = {
    render: Template,
    args: {
        formLabelItemAlign: 'horizontal',
    },
};


const ValidateTemplate = (args: TFormSectionProps) => {

    const [description, setDescription] = useState<string>('');
    const [artifactUrl, setArtifactUrl] = useState<string>('');
    const [port, setPort] = useState<string>('');
    const [profile, setProfile] = useState<string>('');
    const [resourceSpec, setResourceSpec] = useState<string>('');

    const noRowUrl = useRef<TTextFieldRef>(null);
    const noRowPort = useRef<TTextFieldRef>(null);
    const noRowProfile = useRef<TTextFieldRef>(null);
    const noRowResource = useRef<TDropdownRef>(null);
    const noRowDescriptionRef = useRef<TTextFieldRef>(null);

    const noRowValidate = useCallback(() => {
        noRowUrl.current.validate();
        noRowPort.current.validate();
        noRowProfile.current.validate();
        noRowResource.current.validate();
        noRowDescriptionRef.current.validate();

        notify.info('저장 이벤트 발생');
    }, []);


    const noRowRightAction = useMemo(() => (<>
        <TButton onClick={() => notify.info('취소 이벤트 발생')}>취소</TButton>
        <TButton main onClick={noRowValidate}>저장</TButton>
    </>), [noRowValidate]);


    return (
        <>
            <TToast/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>

                <TFormSection label={'Properties'} column={2} noRowDivider rightAction={noRowRightAction} {...args}>
                    <TFormSectionRow>
                        <TFormSectionItem label={'Artifact URL'} required>
                            <TTextField ref={noRowUrl} rules={[TValidatorRule.required()]} value={artifactUrl} onChange={setArtifactUrl} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'Port'}>
                            <TTextField ref={noRowPort} rules={[TValidatorRule.required()]}
                                        counter={20} value={port} onChange={setPort} placeholder={'8080'}/>
                        </TFormSectionItem>
                    </TFormSectionRow>

                    <TFormSectionRow>
                        <TFormSectionItem label={'Profile'}>
                            <TTextField ref={noRowProfile} rules={[TValidatorRule.required()]}
                                        counter={20} value={profile} onChange={setProfile} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'Resource Spec'}>
                            <TDropdown items={resourceSpecItems} value={resourceSpec} onChange={setResourceSpec} />
                        </TFormSectionItem>
                    </TFormSectionRow>

                    <TFormSectionRow verticalAlign={'top'}>
                        <TFormSectionItem label={'Description'} span={2}>
                            <TTextField ref={noRowDescriptionRef} rules={[TValidatorRule.required()]} multiline
                                        counter={100} rows={5} value={description} onChange={setDescription} />
                        </TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>


            </div>
        </>
    );
};


export const Validate: Story = {
    render: ValidateTemplate,
    args: {
        formLabelItemAlign: 'horizontal',
    },
};
