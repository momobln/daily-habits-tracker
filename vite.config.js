import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/daily-habits-tracker/', // اسم الريبو
  plugins: [react()],
});
