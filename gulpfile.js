var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    include = require("gulp-include"),
    nunjucksRender = require('gulp-nunjucks-render');

var launched = true; /* launch inline style */

nunjucksRender.nunjucks.configure(['1.tpl_before_gulp/'], {watch: false});

gulp.task('inline_styles', function() {
    return gulp.src('./1.tpl_before_gulp/*.html')
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
        .pipe(gulp.dest('2.tpl_complite/'));
});

gulp.task('for_recurly', function() {
    return gulp.src('./1a.recurly_tpl_before_gulp/*.html')
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
        .pipe(gulp.dest('2.tpl_complite/recurly/'));
});

gulp.task('for_gavel', function() {
  return gulp.src('./1b.gavel_tpl_before_gulp/*.html')
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
    .pipe(gulp.dest('2.tpl_complite/gavel/'));
});


gulp.task('inline_styles_and_nunjucks', function() {
    delete require.cache[require.resolve('./data.js')];
    var data = require('./data.js');

    return gulp.src('./1.tpl_before_gulp/*.html')
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
        .pipe(gulp.dest('3.tpl_complite_simple_content/'));
});

gulp.task('inline_styles_and_nunjucks_for_gavel', function() {
  delete require.cache[require.resolve('./data.js')];
  var data = require('./data.js');

  return gulp.src('./1b.gavel_tpl_before_gulp/*.html')
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
    .pipe(gulp.dest('3.tpl_complite_simple_content/gavel/'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(
      [
        './1.tpl_before_gulp/**',
        './1a.recurly_tpl_before_gulp/**',
        './1b.gavel_tpl_before_gulp/**',
        './data.js'
      ],
      [
        'inline_styles',
        'for_recurly',
        'for_gavel',
        'inline_styles_and_nunjucks',
        'inline_styles_and_nunjucks_for_gavel'
      ]);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default',
  [
    'watch',
    'inline_styles',
    'for_recurly',
    'for_gavel',
    'inline_styles_and_nunjucks',
    'inline_styles_and_nunjucks_for_gavel'
  ]
);
