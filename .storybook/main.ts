import {mergeConfig} from 'vite';
import path from 'path';

const resolve = (dir) => path.join(__dirname, '.', dir);

module.exports = {
    stories: ['../stories/components/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', {
            name: '@storybook/preset-scss',
            options: {
                sassLoaderOptions: {
                    additionalData: '@import "/src/styles/designToken/Entry.scss";',
                },
            },
        }
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
                    '~': path.resolve('src/components'),
                    '~style': path.resolve('src/styles'),
                },
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@import "/src/styles/designToken/Entry.scss";',
                    },
                },
            },
        });
    },
    docs: {
        autodocs: false,
    },
};
