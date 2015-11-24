var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    include = require("gulp-include"),
    nunjucksRender = require('gulp-nunjucks-render'),
    replace = require('gulp-replace');

var launched = true;

nunjucksRender.nunjucks.configure(['after_inliner/'], {watch: false});

gulp.task('inline_styles', function() {
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

gulp.task('inline_styles_and_nunjucks', function() {
    delete require.cache[require.resolve('./data.js')];
    var data = require('./data.js');

    return gulp.src('./before_inliner/template*.html')
        .pipe(include())
            .on('error', console.log)
        .pipe(nunjucksRender(data.DATA))
            .on('error', console.log)
        .pipe(inlineCss({
            applyStyleTags: launched,
            applyLinkTags: launched,
            removeStyleTags: launched,
            removeLinkTags: launched,
            preserveMediaQueries: launched
        }))
            .on('error', console.log)
        .pipe(gulp.dest('after_nunjucks/'));
});

gulp.task('for_dmitriy', function() {
    return gulp.src('./before_inliner/1*.html')
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
        .pipe(replace('tpl1.', ''))
            .on('error', console.log)
        .pipe(gulp.dest('for_dmitriy/'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(['./before_inliner/**','./data.js'], ['inline_styles','inline_styles_and_nunjucks', 'for_dmitriy']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'inline_styles', 'inline_styles_and_nunjucks', 'for_dmitriy']);

