import {Meta, StoryObj} from '@storybook/react';

import React, {useState} from 'react';
import TStepBox from '~/data-container/step-box/TStepBox';
import TCard from '~/data-container/card/TCard';
import TCardHeader from '~/data-container/card/TCardHeader';
import TCardContent from '~/data-container/card/TCardContent';
import TTooltip from '../../../../src/components/guide/tooltip/TTooltip';


const meta: Meta<typeof TStepBox> = {
    title: 'DataContainer/TCard',
    component: TStepBox,
};

export default meta;

type Story = StoryObj<typeof TStepBox>;


const Template = (args) => {

    const [val, setVal] = useState('');

    return (<div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>

        <TTooltip id={'card-tooltip'}/>

        <TCard {...args} clickable onClick={() => setVal('1')} width={'300px'} selected={val === '1'}>
            <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
            {/* <CardDivider /> */}
            <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
        </TCard>

        <TCard clickable
               onClick={() => setVal('2')}
               width={'300px'}
               selected={val === '2'}
               tooltipId={'card-tooltip'}
               tooltipContent={'툴팁 예시'}>
            <TCardHeader title={'BYOH'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
            {/* <CardDivider /> */}
            <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
        </TCard>
    </div>);
};


export const Default: Story = {
    render: Template,
    args: {},
};
