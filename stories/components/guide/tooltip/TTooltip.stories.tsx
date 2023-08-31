import {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import TIcon from '@/components/icon/TIcon';
import TButton from '@/components/button/button/TButton';
import TTooltip from '@/components/guide/tooltip/TTooltip';
import {TTooltipProps} from '@/components/guide/tooltip/TTooltip.interface';

// fixme. need to add generic
const meta: Meta = {
    title: 'Guide/TTooltip',
    component: TTooltip,
};
export default meta;

type Story = StoryObj<typeof TTooltip>;

// region [Wrapper]

const NormalTemplate = (args) => (<>
    <TTooltip id={'common-tooltip'}/>

    <div style={{position: 'absolute', left: 'calc(50% - 86px)', top: 'calc(50% - 24px)'}}>
        <TIcon xlarge clickable
               tooltipContent={'위로 뜨는 툴팁'}
               tooltipPlace={'top'}
               tooltipId={'common-tooltip'}>expand_less</TIcon>
        <TIcon xlarge clickable
               tooltipContent={'오른쪽으로 뜨는 툴팁'}
               tooltipPlace={'right'}
               tooltipId={'common-tooltip'}>navigate_next</TIcon>
        <TIcon xlarge clickable
               tooltipContent={'아래로 뜨는 툴팁'}
               tooltipPlace={'bottom'}
               tooltipId={'common-tooltip'}>keyboard_arrow_down</TIcon>
        <TIcon xlarge clickable
               tooltipContent={'왼쪽으로 뜨는 툴팁'}
               tooltipPlace={'left'}
               tooltipId={'common-tooltip'}>chevron_left</TIcon>

        <br/>
        <TButton tooltipContent={'tooltipPlace props 에 top, right, bottom, left 중 값을 입력해주세요'}
                 tooltipId={'common-tooltip'}
                 {...args}>방향 테스트</TButton>
    </div>


</>);


export const Normal = {
    render: NormalTemplate,
    args: {
        tooltipPlace: 'top',
    },
};

// endregion

// region [Wrapper]

const CustomTemplate = (args: TTooltipProps) => (<>
    <TTooltip id={'custom-html'} {...args}>
        <TIcon style={{marginRight: '8px'}}>fingerprint</TIcon> 지문으로 인증해 주세요. 이런 식으로 툴팁 내부에 텍스트가 아닌 값을 넣을 수 있어요.
    </TTooltip>

    <TIcon xlarge clickable tooltipId={'custom-html'}>fingerprint</TIcon>

</>);


export const HtmlCustom = {
    render: CustomTemplate,
    args: {
        place: 'top',
    },
};

// endregion
