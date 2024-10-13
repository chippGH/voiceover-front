import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { config } from 'dotenv'

config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {
    'process.env': process.env
  }
})
