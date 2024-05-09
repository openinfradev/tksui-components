import {Meta, StoryObj} from '@storybook/react';
import {useCallback, useMemo, useRef} from 'react';
import TButton from '@/components/button/button/TButton';
import TFormSection from '@/components/data-container/form-section/TFormSection';
import TFormSectionRow from '~/data-container/form-section/TFormSectionRow';
import TFormSectionItem from '@/components/data-container/form-section/TFormSectionItem';
import {TFormSectionProps} from '~/data-container/form-section';

import TTextField from '@/components/input/text-field/TTextField';
import useInputState from '@/common/hook/UseInputState';
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

    const name = useInputState('');
    const version = useInputState('');
    const description = useInputState('');
    const artifactUrl = useInputState('');
    const ip = useInputState('');
    const port = useInputState('');
    const profile = useInputState('');
    const resourceSpec = useInputState('');

    const noRowUrl = useRef<TTextFieldRef>(null);
    const noRowPort = useRef<TTextFieldRef>(null);
    const noRowProfile = useRef<TTextFieldRef>(null);
    const noRowResource = useRef<TDropdownRef>(null);
    const noRowDescriptionRef = useRef<TTextFieldRef>(null);

    const verticalNameRef = useRef<TTextFieldRef>(null);
    const verticalDescriptionRef = useRef<TTextFieldRef>(null);
    const verticalVersionRef = useRef<TTextFieldRef>(null);


    const noRowValidate = useCallback(() => {
        noRowUrl.current.validate();
        noRowPort.current.validate();
        noRowProfile.current.validate();
        noRowResource.current.validate();
        noRowDescriptionRef.current.validate();

        notify.info('저장 이벤트 발생');
    }, []);


    const verticalValidate = useCallback(() => {
        verticalNameRef.current.validate();
        verticalVersionRef.current.validate();
        verticalDescriptionRef.current.validate();

        notify.info('저장 이벤트 발생');
    }, []);


    const leftAction = useMemo(() => (
        <TButton onClick={() => notify.info('목록 돌아가기 이벤트 발생')}>목록</TButton>
    ), []);
    const verticalRightAction = useMemo(() => (<>
        <TButton onClick={() => notify.info('취소 이벤트 발생')}>취소</TButton>
        <TButton main onClick={verticalValidate}>저장</TButton>
    </>), []);

    const noRowRightAction = useMemo(() => (<>
        <TButton onClick={() => notify.info('취소 이벤트 발생')}>취소</TButton>
        <TButton main onClick={noRowValidate}>저장</TButton>
    </>), [noRowValidate]);


    return (
        <>
            <TToast/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <TFormSection label={'Basic Properties'} column={2} {...args} customInformation={<>앱 생성 양식 예제입니다.</>}
                >
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

                <TFormSection label={'Properties'} column={3} information={'컨트롤플레인 노드는 이런겁니다.\n인프라 노드는 이런겁니다.\n사용자 노드는 이런겁니다.'}>
                    <TFormSectionRow>
                        <TFormSectionItem label={'Artifact URL'} required information={'form item에 설명이 필요하면 \n information 기능을 사용하면 됩니다.'}>
                            <TTextField {...artifactUrl} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'IP'}>
                            <TTextField counter={20} {...ip} placeholder={'123.123.123.123'}/>
                        </TFormSectionItem>
                        <TFormSectionItem label={'Port'}>
                            <TTextField counter={5} {...port} placeholder={'8080'}/>
                        </TFormSectionItem>
                    </TFormSectionRow>

                    <TFormSectionRow>
                        <TFormSectionItem label={'Profile'}>
                            <TTextField counter={20} {...profile} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'Resource Spec'} span={2}>
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
                            <TTextField counter={20} {...port} placeholder={'8080'}/>
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

                    <TFormSectionRow verticalAlign={'top'}>
                        <TFormSectionItem label={'Description'} span={1}>
                            <TTextField multiline counter={100} rows={5} {...description} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'Description'} span={1}>
                            <TTextField multiline counter={100} rows={5} {...description} />
                        </TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>

                <TFormSection label={'Properties'} column={2} noRowDivider rightAction={noRowRightAction}>
                    <TFormSectionRow>
                        <TFormSectionItem label={'Artifact URL'} required>
                            <TTextField ref={noRowUrl} rules={[TValidatorRule.required()]} {...artifactUrl} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'Port'}>
                            <TTextField ref={noRowPort} rules={[TValidatorRule.required()]} counter={20} {...port} placeholder={'8080'}/>
                        </TFormSectionItem>
                    </TFormSectionRow>

                    <TFormSectionRow>
                        <TFormSectionItem label={'Profile'}>
                            <TTextField ref={noRowProfile} rules={[TValidatorRule.required()]} counter={20} {...profile} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'Resource Spec'}>
                            <TDropdown ref={noRowResource} rules={[TValidatorRule.required()]}
                                       items={resourceSpecItems} {...resourceSpec} />
                        </TFormSectionItem>
                    </TFormSectionRow>

                    <TFormSectionRow verticalAlign={'top'}>
                        <TFormSectionItem label={'Description'} span={2}>
                            <TTextField ref={noRowDescriptionRef} rules={[TValidatorRule.required()]} multiline
                                        counter={100} rows={5} {...description} />
                        </TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>

                <TFormSection label={'Basic Properties'} formLabelItemAlign={'vertical'} column={2}
                              leftAction={leftAction} rightAction={verticalRightAction}>
                    <TFormSectionRow>
                        <TFormSectionItem label={'Name'} required>
                            <TTextField ref={verticalNameRef} rules={[TValidatorRule.required()]} counter={30} {...name} />
                        </TFormSectionItem>
                        <TFormSectionItem label={'Version'} required>
                            <TTextField ref={verticalVersionRef} rules={[TValidatorRule.required()]} counter={20} {...version} />
                        </TFormSectionItem>
                    </TFormSectionRow>
                    <TFormSectionRow>
                        <TFormSectionItem label={'Description'} span={2}>
                            <TTextField ref={verticalDescriptionRef} rules={[TValidatorRule.required()]} counter={300} {...description} />
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
