import type {Meta, StoryObj} from '@storybook/react';

import useInputState from '@/common/hook/UseInputState';
import TTabBox from '@/components/data-container/tab-box/TTabBox';
import type {TTabBoxValue} from '@/components/data-container/tab-box/TTabBox.interface';
import TTabItem from '@/components/data-container/tab-box/TTabItem';

const meta: Meta<typeof TTabBox> = {
    title: 'DataContainer/TTabBox',
    component: TTabBox,
};

export default meta;

type Story = StoryObj<typeof TTabBox>;

const Template = (args) => {
    const tab = useInputState<TTabBoxValue>(0);

    return (
        <>
            <TTabBox {...tab} {...args}>
                <TTabItem label={'One'} content={<div>Tab One</div>} />
                <TTabItem label={'Two'} content={<div>Tab Two</div>} />
                <TTabItem label={'Three'} content={<div>Tab Three</div>} />
            </TTabBox>
        </>
    );
};

export const Default: Story = {
    render: Template,
};
