import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'

const postcssConfig = {}

const external = ['react', 'react-dom', 'prop-types']

const globals = {
    'react': 'React',
    'react-dom': 'ReactDom',
    'prop-types': 'PropTypes'
}

const input = 'src/index.ts'

const getConfig = function (pkg) {
  return [
    {
      input,
      output: {
        globals,
        file: pkg.module,
        format: 'esm',
        // sourcemap: true
      },
      external,
      plugins: [
        babel({ extensions: ['.js', '.ts', '.tsx'] }),
        resolve({ extensions: ['.js', '.ts', '.tsx'] }),
        commonjs(),
        postcss(postcssConfig),
      ],
    },
    {
      input,
      output: {
        globals,
        file: pkg.main,
        format: 'cjs',
        // sourcemap: true
      },
      external,
      plugins: [
        babel({ extensions: ['.js', '.ts', '.tsx'] }),
        resolve({ extensions: ['.js', '.ts', '.tsx'] }),
        commonjs(),
        postcss(postcssConfig),
      ],
    },
    {
      input,
      output: {
        file: pkg.unpack,
        format: 'umd',
        name: 'ReactHeroModal',
        // sourcemap: true,
        globals
      },
      external,
      plugins: [
        babel({ extensions: ['.js', '.ts', '.tsx'] }),
        resolve({ extensions: ['.js', '.ts', '.tsx'] }),
        commonjs(),
        postcss(postcssConfig),
      ],
    },
  ]
}

export default getConfig
