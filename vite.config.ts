import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portafolio.Otero', // La base es solo para desplegar en git-hub. No es necesario en vercel
  publicDir: 'public',
  build: { outDir: 'dist' },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});