import path from 'path';
import {defineConfig, UserConfigExport, type PluginOption, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import {visualizer} from 'rollup-plugin-visualizer';

import compression from 'vite-plugin-compression2';

const resolve = (dir) => path.join(__dirname, '.', dir);


// region [Common Config]

const commonConfig = () => ({
    plugins: [
        react(),
        compression({
            include: [/\.(js)$/, /\.(scss)$/],
            threshold: 1400,
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.scss', '.js'],
        alias: {
            // IntelliJ doesn't recognize vite alias yet
            // Aliases should be set in tsconfig.json, main.ts as well
            // @See https://youtrack.jetbrains.com/issue/WEB-55332/Vite-aliases-in-vite.config-support
            '@': resolve('src/main/rest'),
            '~': resolve('src/main/react'),
            '~style': resolve('src/main/react/style'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "/src/main/react/style/designToken/Entry.scss";',
            },
        },
        devSourcemap: true,
    },
    envDir: './dotenv',
    // @formatter:off
    envPrefix: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    // @formatter:on
});

// endregion


// region [DevServer Config]

const devServerConfig = () => ({
    server: {
        port: 9090,
        proxy: {
            '/api/1.0': {
                target: 'https://tks-api-dev.taco-cat.xyz',
                changeOrigin: true,
                headers: {
                    Connection: 'keep-alive',
                },
            },
        },
    },
    preview: {
        port: 7070,
    },
});

// endregion


// region [Production Config]

const outputConfig = () => ({
    build: {
        outDir: 'dist',
    },
});

// endregion


/**
 * Vite Manual, Vite 매뉴얼
 * https://vitejs.dev/config/
 * https://vitejs-kr.github.io/
 */
export default defineConfig(
    ({mode, command}) => {
        // dev (dev, serve), preview (prod, serve), build (prod, build)

        let config: UserConfigExport = {...commonConfig()};

        if (command === 'serve') {
            config = {...config, ...devServerConfig()};
        }
        if (mode === 'production') {
            config = {...config, ...outputConfig()};
            if (process.env.npm_lifecycle_event === 'analyze') {
                config.plugins = [
                    ...config.plugins,
                    visualizer({
                        // https://github.com/btd/rollup-plugin-visualizer
                        title: 'TKS Bundle Report',
                        filename: './dist/tks-bundle-report.html',
                        open: true,
                        gzipSize: true,
                    }) as unknown as PluginOption,
                ];
            }
        }

        return config;
    },
);

