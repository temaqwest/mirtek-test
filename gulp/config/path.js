/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

import * as nodePath from 'path';
const rootDir = nodePath.basename(nodePath.resolve());

const buildDir = './dist/';
const srcDir = './src/';

export const path = {
    build: {
        html: buildDir,
        style: buildDir + 'assets/css/',
        js: buildDir + 'assets/js/',
        fonts: buildDir + 'assets/fonts/',
        img: buildDir + 'assets/img/',
        files: buildDir + 'assets/files/'
    },
    src: {
        html: {
            components: srcDir + 'components/**/*.pug',
            pages: srcDir + 'templates/pages/*.pug',
            layouts: srcDir + 'templates/layouts/*.pug',
        },
        style: {
            src: srcDir + 'assets/styles/main.scss',
        },
        js: {
            assetsScripts: srcDir + 'assets/scripts/*.js',
            assetsLibs :srcDir + 'assets/libs/*.js',
            components: srcDir + 'components/**/*.js'
        },
        fonts: srcDir + 'assets/fonts/*.*',
        img: srcDir + 'components/**/assets/*.*',
        files: srcDir + 'assets/files/**/*.*'
    },
    watch: {
        html: {
            components: srcDir + 'components/**/*.pug',
            templates: srcDir + 'templates/**/*.pug',
        },
        style: {
            assets: srcDir + 'assets/styles/**/*.scss',
            components: srcDir + 'components/**/*.scss'
        },
        js: {
            assets: srcDir + 'assets/scripts/*.js',
            components: srcDir + 'components/**/*.js'
        },
        fonts: srcDir + 'assets/fonts/*.*',
        img: srcDir + 'components/**/assets/*.*',
        files: srcDir + 'assets/files/**/*.*'
    },
    buildDir,
    srcDir,
    rootDir,
    clean: buildDir
}