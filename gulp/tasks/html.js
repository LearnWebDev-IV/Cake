module.exports = function () {
    t.gulp.task('html', function() {
        return t.gulp.src('assets/template/index.html')
            .pipe(t.gulp.dest("public/"))
            .pipe(t.browserSync.reload({
                stream:true
            }))
    });
}