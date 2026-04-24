import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/TicTacToe/', // ← замени на имя своего репозитория
  plugins: [react(), tailwindcss()],
})
