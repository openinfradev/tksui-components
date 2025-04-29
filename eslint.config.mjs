import {defineConfig} from 'eslint/config';
import {fixupPluginRules} from '@eslint/compat';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import _import from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
path.dirname(__filename);

export default defineConfig([
    // 1. JS 권장 + Prettier 권장 설정
    js.configs.recommended,
    prettier,

    // 2. ignores 설정
    {
        ignores: [
            '**/node_modules/**',
            '**/.next/**',
            '**/dist/**',
            '**/build/**',
            '**/*.min.js',
            '**/coverage/**',
            '**/temp/**',
        ],
    },

    // 3. 모든 파일 (js, ts, json 등) 설정
    {
        files: ['**/*.{js,jsx,ts,tsx}'],

        plugins: {
            react: fixupPluginRules(react),
            'react-hooks': fixupPluginRules(reactHooks),
            'jsx-a11y': fixupPluginRules(jsxA11Y),
            import: fixupPluginRules(_import),
            'simple-import-sort': simpleImportSort,
            '@next/next': nextPlugin,
        },

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',

            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        settings: {
            react: {
                version: 'detect',
            },

            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },

            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },

        rules: {
            // Next.js 관련
            '@next/next/no-html-link-for-pages': 'off',

            // React 관련
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-uses-react': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Import 관련
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^node:'], // 1. node 내장 모듈 (node:path, node:fs 등)
                        ['^@?\\w'], // 2. node_modules의 외부 패키지 (react, lodash 등)
                        ['^@/', '^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // 3. 내 코드 (@/ 절대 경로, 상대 경로)
                        ['^.+\\.s?css$'], // 4. 스타일 파일 (css, scss 등)
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',

            // 일반 코드 스타일
            'no-console': [
                'warn',
                {
                    allow: ['warn', 'error'],
                },
            ],

            'no-debugger': 'warn',
            'no-unused-vars': 'off',

            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                },
            ],

            'prefer-const': 'error',
            'prefer-template': 'error',
            'object-shorthand': 'error',
            'arrow-parens': ['error', 'always'],

            'no-var': 'error',
        },
    },

    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': fixupPluginRules(typescriptEslint),
            react: fixupPluginRules(react),
            'react-hooks': fixupPluginRules(reactHooks),
            'jsx-a11y': fixupPluginRules(jsxA11Y),
            import: fixupPluginRules(_import),
            'simple-import-sort': simpleImportSort,
            '@next/next': nextPlugin,
        },

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',

            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            // TypeScript 관련
            '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                },
            ],
        },
    },

    // 4. 테스트 파일 (test.tsx 등) 설정
    {
        files: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],

        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },

        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
]);
