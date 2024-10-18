import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:3000', // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '/auth'),
      },
      '/crud': {
        target: 'http://localhost:3000', // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/crud/, '/crud'),
      },
    },
  },
});
