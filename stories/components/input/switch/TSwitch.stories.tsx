import type {Meta, StoryObj} from '@storybook/react';
import {Decorator} from '@storybook/react';

import useInputState from '@/common/hook/UseInputState';
import TSwitch from '@/components/input/switch/TSwitch';
import type {TSwitchProps} from '@/components/input/switch/TSwitch.interface';

const meta: Meta<typeof TSwitch> = {
    title: 'Input/TSwitch',
    component: TSwitch,
};
export default meta;

type Story = StoryObj<typeof TSwitch>;

// region [Normal]

const NormalTemplate = (args: TSwitchProps) => {
    const switch1 = useInputState(false);
    const switch2 = useInputState('N');
    const switch3 = useInputState(true);
    const switch4 = useInputState(false);

    return (
        <div>
            <TSwitch {...switch1} label={`Normal (${switch1.value})`} /> <br />
            <TSwitch
                {...switch2}
                label={`Custom Value (${switch2.value})`}
                positiveValue={'Y'}
                negativeValue={'N'}
            />{' '}
            <br />
            <TSwitch {...switch3} label={`Disabled On (${switch3.value})`} disabled /> <br />
            <TSwitch {...switch4} label={`Disabled Off (${switch4.value})`} disabled /> <br />
        </div>
    );
};

export const Default: Story = {
    render: NormalTemplate,
};

// endregion
