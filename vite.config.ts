/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: ['es2022'],
    reportCompressedSize: true,
  },
  plugins: [
    analog({
      prerender: {
        routes: ['/', '/cv', '/404.html'],
      },
      nitro: {
        routeRules: {
          '/404.html': { ssr: false },
        },
      },
    }),
  ],
  server: {
    fs: {
      allow: ['.'],
    },
    watch: {
      ignored: ['**/dist/**', '**/node_modules/**', '**/.git/**'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
  },
});
