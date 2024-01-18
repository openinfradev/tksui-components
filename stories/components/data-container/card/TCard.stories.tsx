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
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', width: '100%'}}>
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
            <Container label={'Type White'}>
                <TCard {...args}>
                    <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
                    {/* <CardDivider /> */}
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
                </TCard>
            </Container>

            <Container label={'Type Blue'}>
                <TCard {...args} type={'blue'}>
                    <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
                    {/* <CardDivider /> */}
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
                </TCard>
            </Container>

            <Container label={'Header alone + Type White'}>
                <TCard {...args} >
                    <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
                </TCard>
            </Container>

            <Container label={'Content alone + Type Blue'}>
                <TCard {...args} type={'blue'}>
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
                </TCard>
            </Container>


            <Container label={'Type White + Dashed'}>
                <TCard {...args} dashed>
                    <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
                    {/* <CardDivider /> */}
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</TCardContent>
                </TCard>
            </Container>

            <Container label={'Type Blue + Dashed'}>
                <TCard {...args} type={'blue'} dashed>
                    <TCardHeader title={'AWS'} subTitle={'Lorem ipsum dolor sit'}></TCardHeader>
                    {/* <CardDivider /> */}
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
            <Container label={'Center'}>
                <TCard {...args} width={360} height={240} dashed center>
                    <TIcon color={'#aaa'}>add</TIcon>
                </TCard>
            </Container>
            <Container label={'Custom'}>
                <TCard {...args} type={'blue'} width={'100%'} dashed center clickable>
                    <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                        <TIcon small>post_add</TIcon>
                        <div style={{marginTop: '4px'}}>행 추가</div>
                    </div>
                </TCard>
            </Container>

            <Container label={'Custom'}>
                <TCard {...args} type={'blue'} width={'100%'} dashed center clickable>
                    <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                        <TIcon small>post_add</TIcon>
                        <div style={{marginTop: '4px'}}>행 추가</div>
                    </div>
                </TCard>
            </Container>

            <Container label={'Cards Case1. txt / ico+txt / txt+chart'}>
                <TCard {...args} width={'343px'}>
                    <TCardHeader title={'title'} subTitle={'Sub Title'}></TCardHeader>
                    <TCardContent>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                        dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                        dolor</TCardContent>
                </TCard>
            </Container>
        </div>
    );
};


export const Default: Story = {
    render: Template,
    args: {},
};
