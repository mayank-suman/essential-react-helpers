// import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const getUmdConfig = ({ minify } = { minify: false }) => ({
  external: ['react'],
  input: pkg.source,
  output: {
    name: pkg.name,
    file: minify ? pkg.browser.replace('.js', '.min.js') : pkg.browser,
    format: 'umd',
    globals: {
      react: 'React',
    },
  },
  plugins: [resolve(), commonjs(), ...[minify && terser()]],
});

export default [
  getUmdConfig(),
  getUmdConfig({ minify: true }),
  {
    external: ['react'],
    input: pkg.source,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
