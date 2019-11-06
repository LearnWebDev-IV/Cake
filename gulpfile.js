const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

const cssFiles = [
  './src/static/css/main.css'
];

const jsFiles = [
  './src/controllers/main.js'
];

const imageFiles = [
    './src/static/img/*'
];

function styles() {
  return gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
      browsers: ['>0.1%'],
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./public/static/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify({
      toplevel: true
    }))
    .pipe(gulp.dest('./public/controllers'))
    .pipe(browserSync.stream());
}

function images() {
    return gulp.src(imageFiles)
        .pipe(gulp.dest('./public/static/img'))
        .pipe(browserSync.stream());
}

function clean() {
  return del(['public/*'])
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./src/static/css/**/*css', styles);
  gulp.watch('./src/controllers/**/*js', scripts);
  gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('del', clean);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, images)));
gulp.task('dev', gulp.series('build', 'watch'));