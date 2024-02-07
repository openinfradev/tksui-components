import {Meta, StoryObj} from '@storybook/react';
import TPage from '@/components/screen/page/TPage';
import {TPageProps} from '@/components/screen/page/TPage.interface';
import TSection from '~/data-container/section/TSection';


const meta: Meta<typeof TPage> = {
    title: 'Screen/TPage',
    component: TPage,
};
export default meta;

type Story = StoryObj<typeof TPage>;

const infoContent = `
Lorem ipsum dolor sit amet, consec
tetur adipiscing elit. In nec consecte
tur justo, in faucibus nisl. Donec acc
umsan, sem non pellentesque ullam
corper, diam lectus cursus urna, 
in euismod dui risus vitae massa. 
Donec pretium faucibus placerat. 
Nulla facilisi. Proin ultricies, 
nulla eget efficitur facilisis, orci quam acc
umsan nulla, eget condimentum pur
us massa eu velit. Suspendisse fring
illa ex ex, in facilisis urna sagittis vel. Cras sit amet mattis urna. Etiam vehi
cula cursus lorem ac tempor.`;

const Template = (args: TPageProps) => {

    return (
        <>
            <TPage title={'클러스터 관리'} {...args} >
                <TSection label={'컨텐츠 1'}>
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
                </TSection>
                <TSection label={'컨텐츠 2'}>
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
                </TSection>

            </TPage>
        </>
    );
};


export const TopBottom: Story = {
    render: Template,
    args: {infoPanelContent: infoContent},
};

export const LeftRight: Story = {
    render: Template,
    args: {
        infoPanelContent: infoContent,
        contentDirection: 'left-light',
    },
};
