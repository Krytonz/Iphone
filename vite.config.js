import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // O GitHub Pages publica em /Iphone/, enquanto a Vercel publica na raiz.
  base: process.env.GITHUB_ACTIONS ? '/Iphone/' : '/',
})
