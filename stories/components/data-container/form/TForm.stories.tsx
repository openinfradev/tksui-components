import type {Meta, StoryObj} from '@storybook/react';
import {useMemo, useRef, useState} from 'react';

import TValidatorRule from '@/common/validator/TValidatorRule';
import type {TTextFieldRef} from '@/components';
import TButton from '@/components/button/button/TButton';
import TTextField from '@/components/input/text-field/TTextField';

import TForm from '~/data-container/form/TForm';
import TDropdown from '~/input/dropdown/TDropdown';

const meta: Meta<typeof TForm> = {
    title: 'DataContainer/TForm',
    component: TForm,
};
export default meta;

type Story = StoryObj<typeof TForm>;

const resourceSpecItems = [
    {text: 'Tiny', value: 't'},
    {text: 'Medium', value: 'm'},
    {text: 'Large', value: 'l'},
];

const Template = () => {
    const [description, setDescription] = useState<string>('');
    const [artifactUrl, setArtifactUrl] = useState<string>('');
    const [port, setPort] = useState<string>('');
    const [profile, setProfile] = useState<string>('');
    const [resourceSpec, setResourceSpec] = useState<string>('');

    const noRowUrl = useRef<TTextFieldRef>(null);
    const noRowPort = useRef<TTextFieldRef>(null);
    const noRowProfile = useRef<TTextFieldRef>(null);
    const noRowDescriptionRef = useRef<TTextFieldRef>(null);

    const noRowRightAction = useMemo(
        () => (
            <>
                <TButton>취소</TButton>
                <TButton main>저장</TButton>
            </>
        ),
        []
    );

    const rules = useMemo(() => [TValidatorRule.required()], []);

    return (
        <TForm
            label={'Properties'}
            column={2}
            noRowDivider
            information={'asdf'}
            rightAction={noRowRightAction}
            labelVerticalAlign={'middle'}
            rows={[
                {
                    columns: [
                        {
                            label: 'Artifact URL',
                            required: true,
                            content: (
                                <TTextField
                                    ref={noRowUrl}
                                    rules={rules}
                                    value={artifactUrl}
                                    onChange={setArtifactUrl}
                                />
                            ),
                        },
                        {
                            label: 'Port',
                            content: (
                                <TTextField
                                    ref={noRowPort}
                                    rules={rules}
                                    counter={20}
                                    value={port}
                                    onChange={setPort}
                                    placeholder={'8080'}
                                />
                            ),
                        },
                    ],
                },
                {
                    columns: [
                        {
                            label: 'Profile',
                            content: (
                                <TTextField
                                    ref={noRowProfile}
                                    rules={rules}
                                    counter={20}
                                    value={profile}
                                    onChange={setProfile}
                                />
                            ),
                        },
                        {
                            label: 'Resource Spec',
                            content: (
                                <TDropdown items={resourceSpecItems} value={resourceSpec} onChange={setResourceSpec} />
                            ),
                        },
                    ],
                },
                {
                    labelVerticalAlign: 'top',
                    columns: [
                        {
                            span: 2,
                            label: 'Description',
                            content: (
                                <TTextField
                                    ref={noRowDescriptionRef}
                                    rules={rules}
                                    multiline
                                    counter={100}
                                    rows={5}
                                    value={description}
                                    onChange={setDescription}
                                />
                            ),
                        },
                    ],
                },
            ]}
        />
    );
};

export const Default: Story = {
    render: Template,
    args: {
        labelItemLayout: 'horizontal',
    },
};
