import {Meta, StoryObj} from '@storybook/react';

import React from 'react';
import TStepBox from '~/data-container/step-box/TStepBox';
import TCard from '~/data-container/card/TCard';
import TCardHeader from '~/data-container/card/TCardHeader';
import TCardContent from '~/data-container/card/TCardContent';


const meta: Meta<typeof TStepBox> = {
    title: 'DataContainer/TCard',
    component: TStepBox,
};

export default meta;

type Story = StoryObj<typeof TStepBox>;


const Template = (args) => {

    return (<>

        <TCard clickable>
            <TCardHeader title={'AWS'} subTitle={'fff'}></TCardHeader>

            {/* <CardDivider /> */}

            {/* <CardContent> */}
            {/*     Lorem Ipsum ... */}
            {/* </CardContent> */}
            {/* <CardAction> */}
            {/*     <Button>dd</Button> */}
            {/*     <Button>dd</Button> */}
            {/* </CardAction> */}
            <TCardContent>
                Lorem ipsum dolor
                Lorem ipsum dolor
                Lorem ipsum dolor
                Lorem ipsum dolor
            </TCardContent>

        </TCard>
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
