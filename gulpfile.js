var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    include = require("gulp-include");

gulp.task('inline_styles', function() {
    return gulp.src('./before_inliner/template.html')
        .pipe(include())
            .on('error', console.log)
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true,
            preserveMediaQueries: true
        }))
            .on('error', console.log)
        .pipe(gulp.dest('after_inliner/'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(['./before_inliner/**'], ['inline_styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'inline_styles']);