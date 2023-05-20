import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {

  if (command === 'serve') {
    return {
      // dev specific config
      base: '',
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
      }
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      base: 'https://match00.github.io/FirstBrain/',
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
      }
    }
  }
})
