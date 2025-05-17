import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'admin/config.yml', dest: 'dist/admin' }
      ],
      hook: 'writeBundle'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
