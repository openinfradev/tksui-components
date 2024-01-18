import {Meta, StoryObj} from '@storybook/react';

import React, {ReactNode, useState} from 'react';
import TCard from '~/data-container/card/TCard';
import TCardHeader from '~/data-container/card/TCardHeader';
import TCardContent from '~/data-container/card/TCardContent';
import TTooltip from '../../../../src/components/guide/tooltip/TTooltip';
import {TIcon} from '~/icon';

const meta: Meta<typeof TCard> = {
    title: 'DataContainer/TCard',
    component: TCard,
};

export default meta;

type Story = StoryObj<typeof TCard>;


const Container = ({children, label}: { children: ReactNode, label?: string }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px', width: '100%'}}>
            {label && <p style={{fontSize: '14px'}}>{label}</p>}
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', width: '100%'}}>
                {children}
            </div>
        </div>
    );
};


const Template = (args) => {

    const [val, setVal] = useState('');

    return (
        <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px', flexDirection: 'column'}}>
            <TTooltip id={'card-tooltip'}/>
            <Container label={'Normal / Normal Dashed'}>
                <TCard {...args} width={'200px'} height={'200px'}/>
                <TCard {...args} width={'200px'} height={'200px'} dashed/>
            </Container>

            <Container label={'Normal with alone Header'}>
                <TCard {...args} type={'blue'}>
                    <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
                </TCard>
            </Container>

            <Container label={'Normal with alone Content'}>
                <TCard {...args} >
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
                </TCard>
            </Container>

            <Container label={'Clickable'}>
                <TCard {...args} clickable onClick={() => setVal('1')} width={'300px'} selected={val === '1'}>
                    <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
                    {/* <CardDivider /> */}
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
                </TCard>

                <TCard {...args} clickable onClick={() => setVal('2')} width={'300px'} selected={val === '2'}>
                    <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
                    {/* <CardDivider /> */}
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
                </TCard>
            </Container>

            <Container label={'Only Text / Card Icon + Text / Header Icon + Text'}>
                <TCard {...args} width={'343px'}>
                    <TCardHeader title={'title'} subTitle={'Sub Title'}></TCardHeader>
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                        dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                        dolor</TCardContent>
                </TCard>

                <TCard {...args} width={'343px'} icon={'edit'} iconSize={'large'} iconColor={'#3617CE'}>
                    <TCardHeader title={'title'} subTitle={'Sub Title'}></TCardHeader>
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                        dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                        dolor</TCardContent>
                </TCard>

                <TCard {...args} width={'343px'}>
                    <TCardHeader title={'title'} subTitle={'Sub Title'} icon={'alarm'} iconColor={'violet'}/>
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                        dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                        dolor</TCardContent>
                </TCard>
            </Container>

            <Container label={'Widget Card'}>
                <TCard {...args} width={360} height={240} dashed center icon={'add'} iconSize={'large'} iconColor={'#71747A'} clickable/>
            </Container>

        </div>
    );
};


export const Default: Story = {
    render: Template,
    args: {},
};
