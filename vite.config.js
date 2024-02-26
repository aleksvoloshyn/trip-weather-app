import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/trip-weather-app/',
  server: {
    port: 8080,
    open: true,
    host: true,
  },
})
