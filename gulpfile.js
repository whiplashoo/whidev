const { task, src, dest, parallel, series, watch } = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

function jsPipes() {
    return src('js/*.js')
        .pipe(terser())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('dist/js/'))
        .pipe(browserSync.stream());
}

function cssPipes() {
    return src("css/*.css")
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(cssnano())
        .pipe(dest('dist/css/'))
        .pipe(browserSync.stream());
}

function browserSyncTask() {
    browserSync.init({
        proxy: "localhost:8888/whidev", //On Mac  
        notify: false
    });
}

function watchFiles() {
    //watch('js', jsPipes);
    watch('css', cssPipes);
}
exports.watch = parallel(watchFiles, browserSyncTask);