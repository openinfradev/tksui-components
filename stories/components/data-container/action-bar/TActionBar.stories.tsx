import {Meta, StoryObj} from '@storybook/react';
import TActionBar from '~/data-container/action-bar/TActionBar';
import TButton from '~/button/button/TButton';
import {TActionBarProps} from '~/data-container/action-bar/TActionBar.interface';

const meta: Meta<typeof TActionBar> = {
    title: 'DataContainer/TActionBar',
    component: TActionBar,
};

export default meta;

type Story = StoryObj<typeof TActionBar>;

const Template = (args: TActionBarProps) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <TActionBar leftAction={<TButton>목록</TButton>}
                        rightAction={<>
                            <TButton>취소</TButton>
                            <TButton main>저장</TButton>
                        </>}
                        {...args}
            />
            <TActionBar leftAction={<TButton>이전</TButton>}
                        rightAction={<TButton>다음</TButton>} {...args}
            />
            <TActionBar
                centerAction={<>
                    <TButton primary>초기화</TButton>
                    <TButton main>조회</TButton>
                </>}
                {...args}
            />
        </div>);
};


export const Default: Story = {
    render: Template,
};
