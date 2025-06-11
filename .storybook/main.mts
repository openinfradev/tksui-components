import path from 'path';
import {mergeConfig} from 'vite';

const config = {
    stories: ['../stories/components/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
    ],
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
                    src: path.resolve('src'),
                    '~': path.resolve('src/components'),
                    '~style': path.resolve('src/styles'),
                },
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        api: 'modern',
                        includePaths: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, '../')],
                    },
                },
            },
        });
    },
    docs: {
        autodocs: false,
    },
};

export default config;
