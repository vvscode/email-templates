var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    include = require("gulp-include");

gulp.task('inline_styles', function() {
    return gulp.src('./before_inliner/*.html')
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true,
            preserveMediaQueries: true
        }))
        .pipe(gulp.dest('after_inliner/'));
});

gulp.task('IncludeFile', function() {
    return gulp.src('./before_inliner/template.html')
        // options is optional
        .pipe(include())
            .on('error', console.log)
        .pipe(gulp.dest('after_inliner/'));
});

/*
// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(['./before_inliner/**'], ['inline_styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'inline_styles']);
*/
gulp.task('default', ['IncludeFile']);