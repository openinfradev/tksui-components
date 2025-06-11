import type {Preview} from '@storybook/react';

import '../src/styles/Entry.scss';
import './preview.scss';

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            toc: true, // Table of contents in docs
        },
        actions: { argTypesRegex: '^on[A-Z].*' }, // Auto detect onClick, onChange etc.
    },
};

export default preview;
