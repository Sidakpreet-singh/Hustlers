import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves project sites from /<repository-name>/.
  // Local development and other static hosts serve from the domain root.
  base: process.env.GITHUB_ACTIONS ? '/Hustlers/' : '/',
  plugins: [react(), tailwindcss()],
})
