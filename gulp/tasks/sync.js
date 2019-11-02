module.exports = function () {
    t.gulp.task('Sync', function () {
        t.browserSync.init({
            server: {
                baseDir: "./public"
            }
        });
    })
}