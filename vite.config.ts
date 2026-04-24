import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/TicTacToe/', // ← именно так, с большими T
  plugins: [react(), tailwindcss()],
})