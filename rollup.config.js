import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true
      },
    ],
    plugins: [
      json(),
      commonjs()
    ],
    external: [
      'nearley',
      'randexp'
    ]
  }
]
