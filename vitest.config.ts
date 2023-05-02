import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/dist/**'],
    testTimeout: 20000,
    threads: !process.versions.node.startsWith('14'),
  },
  esbuild: {
    target: 'node14',
  },
})
