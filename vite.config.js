import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/Renato/proyecto1_calculadora/',
  test: {
    environment: 'jsdom',             
    globals: true,                     
    setupFiles: ['./src/test/setupTests.js'],
    include: ['src/**/*.{test,spec}.{js,jsx}'], 
    watch: false,
  },
})