var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    include = require("gulp-include");

gulp.task('inline_styles', function() {
    var launched = true;
    return gulp.src('./before_inliner/template*.html')
        .pipe(include())
            .on('error', console.log)
        .pipe(inlineCss({
            applyStyleTags: launched,
            applyLinkTags: launched,
            removeStyleTags: launched,
            removeLinkTags: launched,
            preserveMediaQueries: launched
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