import {mergeConfig} from 'vite';
import path from 'path';

const resolve = (dir) => path.join(__dirname, '.', dir);

module.exports = {
    stories: ['../stories/components/**/*.stories.tsx'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    async viteFinal(config, {configType}) {
        // return the customized config
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@': path.resolve('src'),
                    '~': path.resolve('src/components'),
                    '~style': path.resolve('src/styles'),
                },
            },
        });
    },
    docs: {
        autodocs: false,
    },
};
