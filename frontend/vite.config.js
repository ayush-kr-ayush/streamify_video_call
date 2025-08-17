import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'stream-chat-react']
        }
      }
    },
    chunkSizeWarningLimit: 2000 // optional, warnings kam karne ke liye
  }
})
