import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite"; // This is the v4 plugin
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // This tells Vite to use the TailwindCSS plugin
  ],
});