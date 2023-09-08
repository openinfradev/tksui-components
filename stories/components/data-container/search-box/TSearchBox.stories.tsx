import {Meta, StoryObj} from '@storybook/react';
import TTextField from '@/components/input/text-field/TTextField';
import useInputState from '@/common/hook/UseInputState';
import TToast, {notify} from '@/components/guide/toast/TToast';
import TSearchBox from '@/components/data-container/search-box/TSearchBox';
import {TSearchBoxProps} from '@/components/data-container/search-box/TSearchBox.interface';
import TSearchBoxRow from '@/components/data-container/search-box/TSearchBoxRow';
import TSearchBoxItem from '@/components/data-container/search-box/TSearchBoxItem';
import TCheckboxGroup from '@/components/input/checkbox-group/TCheckboxGroup';


const meta: Meta<typeof TSearchBox> = {
    title: 'DataContainer/TSearchBox',
    component: TSearchBox,
};
export default meta;

type Story = StoryObj<typeof TSearchBox>;


const Template = (args: TSearchBoxProps) => {

    const name = useInputState('');
    const status = useInputState([]);


    function onReset() {
        name.onChange('');
        status.onChange([]);
    }

    return (
        <>
            <TToast/>

            <TSearchBox column={2}
                        labelWidth={'15%'}
                        onReset={onReset}
                        onSearch={() => notify.info('검색 이벤트 발생')}
                        {...args}
            >
                <TSearchBoxRow>
                    <TSearchBoxItem label={'아이디'}>
                        <TTextField {...name} />
                    </TSearchBoxItem>
                </TSearchBoxRow>
                <TSearchBoxRow>
                    <TSearchBoxItem label={'상태'}>
                        <TCheckboxGroup {...status}
                                        items={[
                                            {value: 'CREATED', text: '조치 전'},
                                            {value: 'INPROGRESS', text: '조치 중'},
                                            {value: 'CLOSED', text: '종료'},
                                            {value: 'ERROR', text: '에러'}
                                        ]}
                        />
                    </TSearchBoxItem>
                </TSearchBoxRow>
            </TSearchBox>
        </>
    );
};


export const Default: Story = {
    render: Template,
};

