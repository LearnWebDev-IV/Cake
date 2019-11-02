module.exports = function () {
    t.gulp.task('pug', function() {
        return t.gulp.src("assets/template/**/*.pug")
            .pipe(t.glp.pug())
            .pipe(t.gulp.dest("public"))
            .on('end',t.browserSync.reload)
    });
}