/* eslint-disable no-undef */
import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.jsx'
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets")
    }
  }
});
