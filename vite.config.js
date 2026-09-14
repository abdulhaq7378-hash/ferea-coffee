import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Production builds are served from GitHub Pages at /ferea-coffee/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ferea-coffee/' : '/',
  plugins: [react(), tailwindcss()],
}))
