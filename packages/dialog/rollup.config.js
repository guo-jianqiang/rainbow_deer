import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from "rollup-plugin-uglify"
import pkg from './package.json'

const postcssConfig = {
    // extract: true
}

const external = ['react', 'react-dom']

export default [
    {
        input: 'src/index.ts',
        output: {
            file: pkg.module,
            format: 'esm',
            // sourcemap: true
        },
        external,
        plugins: [
            babel({ extensions: ['.js', '.ts', '.tsx'] }),
            resolve({ extensions: ['.js', '.ts', '.tsx'] }),
            commonjs(),
            uglify(),
            postcss(postcssConfig)
        ]
    },
    {
        input: 'src/index.ts',
        output: {
            file: pkg.main,
            format: 'cjs',
            // sourcemap: true
        },
        external,
        plugins: [
            babel({ extensions: ['.js', '.ts', '.tsx'] }),
            resolve({ extensions: ['.js', '.ts', '.tsx'] }),
            commonjs(),
            uglify(),
            postcss(postcssConfig)
        ]
    },
    {
        input: 'src/index.ts',
        output: {
            file: pkg.unpack,
            format: 'umd',
            name: 'ReactHeroModal',
            // sourcemap: true,
            globals: {
                react: 'React'
            }
        },
        external,
        plugins: [
            babel({ extensions: ['.js', '.ts', '.tsx'] }),
            resolve({ extensions: ['.js', '.ts', '.tsx'] }),
            commonjs(),
            uglify(),
            postcss(postcssConfig)
        ]
    }
]
