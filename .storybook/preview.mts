import type {Preview} from '@storybook/react';

import '../src/styles/Entry.scss';
import './preview.scss';

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
    },
};

export default preview;
