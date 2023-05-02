import { readFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

import { defineConfig } from 'rollup'
import type { Plugin, RollupOptions } from 'rollup'

const { name, version, author, dependencies, devDependencies } = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)).toString()
)

const year = new Date().getFullYear()
const banner = `// ${name
  .split('/')
  .pop()} v${version} Copyright (c) ${year} ${author}`

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const sharedNodeOptions = defineConfig({
  onwarn(warning, warn) {
    if (warning.message.includes('Circular dependency')) {
      return
    }
    warn(warning)
  },
})

const externalConfig = (isProduction: boolean) => {
  return [
    ...Object.keys(dependencies ?? {}),
    ...(isProduction ? [] : Object.keys(devDependencies ?? {})),
  ]
}

const RollupPluginsConfig = (isProduction: boolean): (Plugin | false)[] => {
  return [
    nodeResolve({ preferBuiltins: true }),
    typescript({
      tsconfig: resolve(__dirname, 'tsconfig.json'),
      sourceMap: !isProduction,
    }),
    commonjs({
      extensions: ['.js'],
    }),
    json(),
  ]
}

const bundlerUpConfig = (isProduction: boolean) => {
  return defineConfig({
    ...sharedNodeOptions,
    input: join(__dirname, 'src', 'index.ts'),
    plugins: RollupPluginsConfig(isProduction),
    output: {
      file: resolve(__dirname, 'dist', 'index.mjs'),
      format: 'esm',
      sourcemap: !isProduction,
      banner,
    },
    external: [...externalConfig(isProduction)],
  })
}

const bundlerUpConfigCjs = (isProduction: boolean) => {
  return defineConfig({
    ...sharedNodeOptions,
    input: join(__dirname, 'src', 'index.ts'),
    plugins: RollupPluginsConfig(isProduction),
    output: {
      file: resolve(__dirname, 'dist', 'index.cjs'),
      format: 'cjs',
      sourcemap: !isProduction,
      banner,
    },
    external: [...externalConfig(isProduction)],
  })
}

export default (cmdArgs: any): RollupOptions[] => {
  const isDev = cmdArgs.watch
  const isProduction = !isDev
  return defineConfig([
    bundlerUpConfigCjs(isProduction),
    bundlerUpConfig(isProduction),
  ])
}
