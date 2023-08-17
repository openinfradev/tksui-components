import {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import TBadge from '~/tks/component/guide/badge/TBadge';
import TIcon from '~/tks/component/icon/TIcon';
import TNumberField from '~/tks/component/input/number-field/TNumberField';


const meta: Meta<typeof TBadge> = {
    title: 'Guide/TBadge',
    component: TBadge,
};

export default meta;
type Story = StoryObj<typeof TBadge>;


const Template = () => {

    const [content, setContent] = useState<number>(1);

    const BadgeAnchor = () => <TIcon type={'filled'}>notifications</TIcon>;

    return (<>
        <TNumberField onChange={(value) => setContent(Number.parseInt(value, 10))} value={content.toString()} min={0}/>
        <br/><br/>

        dot<br/><br/>
        <TBadge content={content} dot>
            <BadgeAnchor/>
        </TBadge>
        <br/><br/><br/>

        dot + showZero <br/><br/>
        <TBadge content={content} dot showZero>
            <BadgeAnchor/>
        </TBadge>
        <br/><br/><br/>

        showZero <br/><br/>
        <TBadge content={content}>
            <BadgeAnchor/>
        </TBadge>
        <br/><br/><br/>

        max 99 <br/><br/>
        <TBadge content={content} max={99}>
            <BadgeAnchor/>
        </TBadge>
        <br/><br/><br/>

        max 99 + showZero<br/><br/>
        <TBadge content={content} max={99} showZero>
            <BadgeAnchor/>
        </TBadge>
        <br/><br/><br/>

        inline<br/><br/>
        <TBadge content={content} max={99} inline>
            <BadgeAnchor/>
        </TBadge>
    </>);
};


export const WithAnchor: Story = {
    render: Template,
};


const InlineTemplate = (args) => {

    const [content, setContent] = useState<number>(1);

    return (<>
        <TNumberField onChange={(value) => setContent(Number.parseInt(value, 10))} value={content.toString()} min={0}/>
        <br/><br/>

        <div style={{width: '200px', border: '1px solid gray'}}>
            <div style={{height: '48px', display: 'flex', alignItems: 'center', padding: '0 16px'}}>
                <div style={{flex: '1 0 auto'}}>받은 메일함</div>
                <TBadge content={content} max={99} color={'#3617CE'} {...args}/>
            </div>

            <div style={{height: '48px', display: 'flex', alignItems: 'center', padding: '0 16px'}}>
                <div style={{flex: '1 0 auto'}}>보낸 메일함</div>
                <TBadge content={content} max={99} color={'#3BCDC7'} {...args}/>
            </div>

            <div style={{height: '48px', display: 'flex', alignItems: 'center', padding: '0 16px'}}>
                <div style={{flex: '1 0 auto'}}>휴지통</div>
                <TBadge content={content} max={99} {...args}/>
            </div>
        </div>
    </>);
};


export const WithoutAnchor: Story = {
    render: InlineTemplate,
};

