import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Mobile-Controller-Website/",
  assetsInclude: ['**/*.apk', '**/*.zip'],
  plugins: [react()],
})
