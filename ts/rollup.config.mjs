import { nodeResolve } from '@rollup/plugin-node-resolve';
// import terser from '@rollup/plugin-terser';

export default {
    input: './dist/index.js',
    output: {
        file: './dist/bundle.js',
        format: 'cjs',
        name: 'bundle'
    },
    plugins: [nodeResolve()]
};
