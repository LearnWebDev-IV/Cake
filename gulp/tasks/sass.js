module.exports = function () {
    t.gulp.task('sass', function() {
        return t.gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'assets/css/**/*.scss'])
            .pipe(t.glp.sourcemaps.init())
            .pipe(t.glp.sass({
                'include css':true
            }))
            .pipe(t.glp.autoprefixer({
                browsers : ['last 10 versions']
            }))
            .on("error", t.glp.notify.onError({
                title: "style"
            }))
            .pipe(t.glp.csso())
            .pipe(t.glp.sourcemaps.write())
            .pipe(t.gulp.dest("public/css"))
            .pipe(t.browserSync.reload({
                stream:true
            }))
    });
}