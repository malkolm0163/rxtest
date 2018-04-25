var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    babel = require('gulp-babel'),
    notify = require('gulp-notify');


// Static server
gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./style/*.css', ['css']);
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./*.html').on('change', browserSync.reload)
});

gulp.task('css', function(){
    return gulp.src('./style/*.css')
    .pipe(browserSync.stream())
});

gulp.task('js', function(){
    return gulp.src('./js/*.js')
    .pipe(babel({
        presets: ['env', 'react']
    }))
    .on('error', notify.onError())
    .pipe(browserSync.stream())
    .pipe(gulp.dest('./js/ready'));
})

gulp.task('default', ['js', 'bs'], function(){})