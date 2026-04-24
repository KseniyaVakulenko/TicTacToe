import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // или @vitejs/plugin-react
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Замени <repo-name> на название твоего репозитория
  base: '/<TicTacToe>/',
  plugins: [react(), tailwindcss()],
})