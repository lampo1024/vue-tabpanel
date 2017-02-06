import vue from 'rollup-plugin-vue2';
import buble from 'rollup-plugin-buble';
import less from 'rollup-plugin-less';
import nodeResolve from 'rollup-plugin-node-resolve';
const version = process.env.VERSION || require('../package.json').version

export default {
    entry: 'src/index.js',
    dest: 'vue-tabpanel.js',
    format: 'umd',
    moduleName: 'VueTaber',
    plugins: [
        vue(),
        less({
            output: 'vue-tabpanel.css',
            insert: false
        }),
        buble(),
        nodeResolve({
            browser: true,
            jsnext: true,
            main: true
        })
    ],
    banner: `/**
 * vue-tabpanel v${version}
 * (c) ${new Date().getFullYear()} ALEXQDJAY
 * mail: alexqdjay@126.com
 * @license Apache2
 */`
}