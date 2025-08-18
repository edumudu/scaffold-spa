import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import legacy from '@vitejs/plugin-legacy';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      tsconfigPaths(),
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      react({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
      tailwindcss(),
      legacy({
        renderLegacyChunks: false,
        modernTargets: [
          'chrome>=107',
          'edge>=107',
          'firefox>=104',
          'safari>=16',
        ],
      }),
    ],

    server: {
      allowedHosts: env.VITE_ALLOWED_HOSTS?.split(','),
    },
  };
});
