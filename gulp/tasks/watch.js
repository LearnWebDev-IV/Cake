module.exports = function () {
    t.gulp.task('watch', function (){
        // t.gulp.watch('assets/template/**/*.pug', t.gulp.series('pug'));
        t.gulp.watch('assets/css/**/*.scss', t.gulp.series('sass'));
        t.gulp.watch('assets/js/main.js', t.gulp.series('scripts'));
    })
}