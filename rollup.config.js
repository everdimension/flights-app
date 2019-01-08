import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

const isProduction = process.env.NODE_ENV === 'production';
const ENV = isProduction ? 'production' : 'development';

export default {
  input: 'src/index.js',
  output: {
    dir: 'build',
    format: 'es',
    sourcemap: true
  },
  experimentalCodeSplitting: true,
  plugins: [
    babel({ exclude: 'node_modules/*' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    resolve(),
    commonjs(),
    postcss({
      modules: true
    }),
    !isProduction &&
      serve({
        contentBase: 'build',
        port: 3000
      }),
    isProduction && uglify()
  ]
};
