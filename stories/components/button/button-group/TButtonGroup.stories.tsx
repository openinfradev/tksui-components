import {Meta, StoryObj} from '@storybook/react';
import {ReactNode, useCallback, useState} from 'react';
import TButtonGroup from '@/components/button/button-group/TButtonGroup';
import TIcon from '@/components/icon/TIcon';


const meta: Meta<typeof TButtonGroup> = {
    title: 'Button/TButtonGroup',
    component: TButtonGroup,
};
export default meta;

type Story = StoryObj<typeof TButtonGroup>;

const Container = ({label, children}: { label: string, children: ReactNode }) => {
    return (
        <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}}>
            <p style={{fontSize: '14px'}}>{label}</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>{children}</div>
        </div>
    );
};

const Template = (args) => {

    const [searchParam, setSearchParam] = useState<string | string[]>(args.value);

    const onChangeSearchParam = useCallback((value) => {
        setSearchParam(value);
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <Container label={`Default(value: ${args.multiSelect ? (searchParam as string[]).join(', ') : searchParam})`}>
                <TButtonGroup {...args} value={searchParam} onChange={onChangeSearchParam}/>
            </Container>

            <Container label={`Primary(value: ${args.multiSelect ? (searchParam as string[]).join(', ') : searchParam})`}>
                <TButtonGroup {...args} primary value={searchParam} onChange={onChangeSearchParam}/>
            </Container>

            <Container label={`Main(value: ${args.multiSelect ? (searchParam as string[]).join(', ') : searchParam})`}>
                <TButtonGroup {...args} main value={searchParam} onChange={onChangeSearchParam}/>
            </Container>

            <Container label={'Disabled'}>
                <TButtonGroup {...args} disabled value={searchParam} onChange={onChangeSearchParam}/>
            </Container>

        </div>);
};


export const SingleSelect: Story = {
    render: Template,
    args: {
        value: '1d',
        items: [
            {template: '최근 1주', value: '1W'},
            {template: '1개월', value: '1M'},
            {template: '3개월', value: '3M'},
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
