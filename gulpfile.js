global.t = {
    gulp: require('gulp'),
    glp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};
t.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});
t.gulp.task('default', t.gulp.series(
    t.gulp.parallel('pug','sass', 'scripts:lib', 'scripts'),
    t.gulp.parallel('watch','Sync')
));