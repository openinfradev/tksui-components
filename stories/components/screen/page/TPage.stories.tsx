import {Meta, StoryObj} from '@storybook/react';
import TPage from '@/components/screen/page/TPage';
import {TPageProps} from '@/components/screen/page/TPage.interface';


const meta: Meta<typeof TPage> = {
    title: 'Screen/TPage',
    component: TPage,
};
export default meta;

type Story = StoryObj<typeof TPage>;

const Template = (args: TPageProps) => {

    return (
        <>
            <TPage title={'클러스터 관리'} {...args} >
                <p>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                    여기에 컨텐츠를 구현합니다. <br/>
                </p>
            </TPage>
        </>
    );
};


export const Default: Story = {
    render: Template,
};
