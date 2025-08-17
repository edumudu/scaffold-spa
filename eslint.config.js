import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import pluginQuery from '@tanstack/eslint-plugin-query';
import pluginRouter from '@tanstack/eslint-plugin-router';
import pluginVitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config([
  globalIgnores(['dist']),
  ...pluginQuery.configs['flat/recommended'],
  ...pluginRouter.configs['flat/recommended'],
  pluginVitest.configs.recommended,
  reactHooks.configs['recommended-latest'],
  eslintPluginUnicorn.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,

      // TODO: Use airbnb config when available for flat configs
      // @see https://github.com/airbnb/javascript/issues/2961
    ],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
      sourceType: 'module',
    },
    rules: {
      // typescript-eslint
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        },
      ],

      // unicorn
      'unicorn/better-regex': 'warn',
      'unicorn/prevent-abbreviations': 'off',

      // import
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
        },
      ],
    },
  },

  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
]);
