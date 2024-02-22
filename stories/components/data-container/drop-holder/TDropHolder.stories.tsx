import {Meta, StoryObj} from '@storybook/react';
import TDropHolder from '@/components/data-container/drop-holder/TDropHolder';

import TIcon from '@/components/icon/TIcon';
import {TDropHolderItem} from '@/components';

const meta: Meta<typeof TDropHolder> = {
    title: 'DataContainer/TDropHolder',
    component: TDropHolder,
};
export default meta;

type Story = StoryObj<typeof TDropHolder>;


const AlignmentTemplate = (args) => {

    const items: TDropHolderItem[] = [
        {text: '내 정보', icon: 'manage_accounts'},
        {text: '로그아웃', icon: 'logout'},
    ];
    return (
        <div style={{marginTop: '120px', display: 'flex', justifyContent: 'center', gap: '60px'}}>
            <TDropHolder {...args} items={items} alignment={'bottom-left'}><TIcon>south_west</TIcon></TDropHolder>
            <TDropHolder {...args} items={items} alignment={'bottom-center'}><TIcon>south</TIcon></TDropHolder>
            <TDropHolder {...args} items={items} alignment={'bottom-right'}><TIcon>south_east</TIcon></TDropHolder>
            <TDropHolder {...args} items={items} alignment={'top-left'}><TIcon>north_west</TIcon></TDropHolder>
            <TDropHolder {...args} items={items} alignment={'top-center'}><TIcon>north</TIcon></TDropHolder>
            <TDropHolder {...args} items={items} alignment={'top-right'}><TIcon>north_east</TIcon></TDropHolder>
        </div>

    );
};


export const Alignment: Story = {
    render: AlignmentTemplate,
    args: {},
};


const Template = (args) => {

    const projectDropHolderTemplate = (item) => (
        <div style={{display: 'flex', gap: '30px', width: '350px'}}>
            <div style={{flex: '1 0 auto'}}>{item.projectName}</div>
            <div style={{color: 'green'}}>{item.cluster} clusters</div>
        </div>
    );

    const items = [
        {projectName: 'IBK 프로젝트', cluster: 20},
        {projectName: 'TKS Cloud Service', cluster: 14},
        {projectName: '하나카드 기간망 구축', cluster: 2},
    ];

    return (
        <div style={{marginTop: '120px', display: 'flex', justifyContent: 'center', gap: '60px'}}>
            <TDropHolder items={items} itemTemplate={projectDropHolderTemplate} {...args}>
                <TIcon>fmd_good</TIcon>
            </TDropHolder>
        </div>

    );
};

export const CustomItem: Story = {
    render: Template,
    args: {},
};

