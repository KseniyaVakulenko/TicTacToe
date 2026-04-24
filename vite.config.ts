import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/tic-tac-toe/', // ← здесь точное имя твоего репозитория
  plugins: [react(), tailwindcss()],
})