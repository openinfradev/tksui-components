import {ReactNode} from 'react';
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


const Container = ({label, children}: { label: string, children: ReactNode }) => {
    return (
        <div style={{border: '1px solid #eee', padding: '16px'}}>
            <div style={{marginBottom: '16px', fontSize: '12px'}}>{label}</div>
            {children}
        </div>
    );
};


const Template = (args: TActionBarProps) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <Container label={'Left + Right with Primary Button'}>
                <TActionBar leftAction={<TButton>목록</TButton>}
                            rightAction={<>
                                <TButton>취소</TButton>
                                <TButton main>저장</TButton>
                            </>}
                            {...args}
                />
            </Container>
            <Container label={'Left + Right'}>
                <TActionBar leftAction={<TButton>이전</TButton>}
                            rightAction={<TButton>다음</TButton>} {...args}
                />
            </Container>
            <Container label={'Center Alone'}>
                <TActionBar
                    centerAction={<>
                        <TButton primary>초기화</TButton>
                        <TButton main>조회</TButton>
                    </>}
                    {...args}
                />
            </Container>
            <Container label={'Left + Center + Right'}>
                <TActionBar
                    leftAction={<TButton>이전</TButton>}
                    centerAction={<>
                        <TButton primary>초기화</TButton>
                        <TButton main>조회</TButton>
                    </>}
                    rightAction={<TButton>다음</TButton>}
                    {...args}
                />
            </Container>
        </div>);
};


export const Default: Story = {
    render: Template,
};
