var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var babili = require('gulp-babili');
var uglify = require('gulp-uglify');
var pump = require('pump');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');

gulp.task('browserSync', () => {
  browserSync.init({
    open: false,
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('sass', () => {
  return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task("moveframeworks", function(){
  gulp.src("node_modules/bootstrap/dist/js/bootstrap.min.js")
  gulp.src("node_modules/jquery/dist/jquery.min.js")
  gulp.src("node_modules/popper.js/dist/popper.min.js")
  .pipe (gulp.dest("app/js"))
  gulp.src("node_modules/bootstrap/dist/css/bootstrap.min.css")
  .pipe (gulp.dest("app/css"))
})

gulp.task('scripts', () => {
  return gulp.src(['app/js/*.js'])
    .pipe(concat('index.min.js'))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
  .on('error', function (err) {
     gutil.log(gutil.colors.red('[Error]'), err.toString());
   })
  .pipe(gulp.dest('dist/js'));
})

gulp.task('minifyhtml', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: false,  conservativeCollapse: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('prefixer', () =>
    gulp.src('app/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
);

gulp.task('clean:dist', () => {
  return del.sync('dist');
})

gulp.task('default', function (callback) {
  runSequence(['watch', "moveframeworks", 'sass', 'browserSync'],
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('clean:dist', ['sass', 'images'] ,'prefixer', 'useref', 'minifyhtml',
    callback)
})
