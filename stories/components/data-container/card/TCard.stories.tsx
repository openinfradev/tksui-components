import {Meta, StoryObj} from '@storybook/react';

import React, {useState} from 'react';
import TCard from '~/data-container/card/TCard';
import TCardHeader from '~/data-container/card/TCardHeader';
import TCardContent from '~/data-container/card/TCardContent';


const meta: Meta<typeof TCard> = {
    title: 'DataContainer/TCard',
    component: TCard,
};

export default meta;

type Story = StoryObj<typeof TCard>;


const Template = (args) => {

    const [val, setVal] = useState('');

    return (<div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>

        <TCard {...args} clickable onClick={() => setVal('1')} width={'300px'} selected={val === '1'}>
            <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
        {/* <CardDivider /> */}
        <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
        </TCard>

        <TCard clickable onClick={() => setVal('2')} width={'300px'} selected={val === '2'}>
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
