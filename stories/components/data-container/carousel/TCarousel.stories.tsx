import {Meta, StoryObj} from '@storybook/react';

import React from 'react';
import TCarousel from '~/data-container/carousel/TCarousel';
import TCarouselItem from '~/data-container/carousel/TCarouselItem';

// @ts-ignore
import banner1 from './banner-1.png';
// @ts-ignore
import banner2 from './banner-2.png';


const meta: Meta<typeof TCarousel> = {
    title: 'DataContainer/TCarousel',
    component: TCarousel,
};

export default meta;

type Story = StoryObj<typeof TCarousel>;


const Template = (args) => {

    return (<>
        <TCarousel {...args}>
            <TCarouselItem cover><img alt={'test'} src={banner1} /></TCarouselItem>
            <TCarouselItem cover><img alt={'test'} src={banner2}/></TCarouselItem>
            <TCarouselItem><img alt={'test'} src={banner1} /></TCarouselItem>
            <TCarouselItem><img alt={'test'} src={banner2}/></TCarouselItem>
        </TCarousel>
    </>);
};


export const Default: Story = {
    render: Template,
    args: {
        autoplay: true,
        showArrow: 'always',
        autoplaySpeed: 6000,
    },
};
