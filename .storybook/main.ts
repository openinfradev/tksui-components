import {mergeConfig} from 'vite';
import path from 'path';

module.exports = {
    stories: ['../src/stories/components/**/*.stories.tsx', '../stories/components/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', {
            name: '@storybook/preset-scss',
            options: {
                sassLoaderOptions: {
                    additionalData: '@import "/src/main/react/style/designToken/Entry.scss";',
                },
            },
        }, '@storybook/addon-mdx-gfm'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    async viteFinal(config, {configType}) {
        // return the customized config
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@': path.resolve('src/main/rest'),
                    '~': path.resolve(__dirname, '/src/main/react'),
                    '~style': path.resolve('/src/main/react/style'),
                },
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@import "/src/main/react/style/designToken/Entry.scss";',
                    },
                },
            },
        });
    },
    docs: {
        autodocs: false,
    },
};
