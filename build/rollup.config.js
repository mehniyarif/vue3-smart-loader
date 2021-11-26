import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import scss from 'rollup-plugin-scss'
export default {
    input: 'src/components/smart-loader/index', // Path relative to package.json
    external: [
        'vue',
        'epic-spinners',
      ],
    output: {
        globals: {
          'vue': 'Vue',
          'epic-spinners': 'epicSpinners',
        },
        name: 'Vue3SmartLoader',
        exports: 'named',
    },
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        scss({
            output: 'dist/main.css'
        }),
        commonjs(),
        buble({
            objectAssign: 'Object.assign'
        }), // Transpile to ES5
    ],
};