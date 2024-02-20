import dts from 'vite-plugin-dts';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    dist: {
      entry: path.resolve(__dirname, 'src/component/index.ts'),
      name: 'Connect Desig System',
      fileName: (format) => `connect-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      include: ['src/component/'],
    }),
  ],
});
