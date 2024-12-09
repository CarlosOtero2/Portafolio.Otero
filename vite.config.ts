import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
  plugins: [react()],
  //base:'/Portafolio.Otero/', // Cambia la base según el entorno
  publicDir: 'public',
  build: { outDir: 'dist' },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});