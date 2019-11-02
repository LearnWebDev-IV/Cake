module.exports = function () {
    t.gulp.task('scripts:lib', function() {
        return t.gulp.src(['node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'])
            .pipe(t.glp.concat('libs.min.js'))
            .pipe(t.gulp.dest("public/js"))
            .pipe(t.browserSync.reload({
                stream:true
            }))
    });
    t.gulp.task('scripts', function() {
        return t.gulp.src('assets/js/main.js')
            .pipe(t.gulp.dest("public/js"))
            .pipe(t.browserSync.reload({
                stream:true
            }))
    });
}