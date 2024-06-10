import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import redirect from 'vite-plugin-redirect'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    react(), 
    svgr(),
    redirect({
      redirects: [
        { from: '/old-path', to: '/new-path' },
        // Add more redirects if needed
      ]
    })
  ],
});