import {Meta, StoryObj} from '@storybook/react';

import {useCallback, useState} from 'react';
import TButtonGroup from '@/components/button/button-group/TButtonGroup';
import TIcon from '@/components/icon/TIcon';


const meta: Meta<typeof TButtonGroup> = {
    title: 'Button/TButtonGroup',
    component: TButtonGroup,
};
export default meta;

type Story = StoryObj<typeof TButtonGroup>;

const Template = (args) => {

    const [searchParam, setSearchParam] = useState<string | string[]>(args.value);

    const onChangeSearchParam = useCallback((value) => {
        setSearchParam(value);
    }, []);


    return (<>
        <span style={{fontSize: '20px'}}>
            선택된 값 = {args.multiSelect ? (searchParam as string[]).join(', ') : searchParam}
        </span> <br/><br/><br/><br/>

        Normal <br/> <br/>
        <TButtonGroup {...args} value={searchParam} onChange={onChangeSearchParam}/>
        <br/> <br/>

        Primary <br/> <br/>
        <TButtonGroup {...args} primary value={searchParam} onChange={onChangeSearchParam}/>
        <br/> <br/>

        Disabled <br/> <br/>
        <TButtonGroup {...args} disabled value={searchParam} onChange={onChangeSearchParam}/>

        <br/> <br/>

        Primary + Disabled <br/> <br/>
        <TButtonGroup {...args} primary disabled value={searchParam} onChange={onChangeSearchParam}/>
    </>);
};


export const SingleSelect: Story = {
    render: Template,
    args: {
        value: '1d',
        items: [
            {template: '최근 1일', value: '1d'},
            {template: '7일', value: '7d'},
            {template: '30일', value: '30d'},
        ],
        multiSelect: false,
    },
};

export const MultiSelect: Story = {
    render: Template,
    args: {
        value: ['italic'],
        items: [
            {template: <TIcon small>format_bold</TIcon>, value: 'bold'},
            {template: <TIcon small>format_italic</TIcon>, value: 'italic'},
            {template: <TIcon small>format_list_numbered_rtl</TIcon>, value: 'ol'},
            {template: <TIcon small>format_strikethrough</TIcon>, value: 'strike'},
        ],
        multiSelect: true,
    },
};
