const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const livereload = require('gulp-livereload');
const typescript = require('gulp-typescript');

const tsProject = typescript.createProject('tsconfig.json');
// const live = livereload.middleware()

gulp.task('develop', function () {  
  livereload.listen('35729');
  nodemon({
    script: 'app.js',
    ext: 'js ejs coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        // 모든 경로에서 파일 변경 사항 감지
        gulp.watch('public/ts/*.ts', gulp.series('compile'));
        livereload.reload();
        gulp.watch('**/*', async function (event) {
          livereload.reload();
          // public/ts/*.ts 경로의 변경 사항일 경우 컴파일 작업 실행//힐리헷는데 안됨
          // if (event.path.includes('public/ts/')) {
          //   await console.log('tsts')
          //   await gulp.series('compile')();
          //   livereload.reload();
          // } else {
          //   console.log('else')
          // }
        })
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('build', function () {  
  livereload.listen();
//   process.env.NODE_ENV = 'build';
  nodemon({
    script: 'app.js',
    ext: 'js ejs coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        // 모든 경로에서 파일 변경 사항 감지
        gulp.watch('**/*', function (event) {
          // public/ts/*.ts 경로의 변경 사항일 경우 컴파일 작업 실행
          if (event.path.includes('public/ts/')) {
            gulp.series('compile')();
            livereload.reload();
          } else {
          }
          // gulp.watch('public/ts/*.ts', gulp.series('compile'));
        })
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default',  gulp.series('develop'));
gulp.task('compile', compileTypeScript);

function compileTypeScript() {
    return tsProject.src()
      .pipe(tsProject())
      .js.pipe(gulp.dest('public/js/'))
      .pipe(livereload());
  }