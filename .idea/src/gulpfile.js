var gulp = require('gulp');
var less = require('gulp-less'); //(преобразуем все файлы less в css)
var autoprefixer = require('gulp-autoprefixer'); //(автоматическое добавление префиксов для разных браузеров)
var concat = require('gulp-concat');// (все файлы less, данного проекта, сохраняем в один файл rezstyle.css)
var sourcemaps = require('gulp-sourcemaps'); //(отслеживание позиции изменения less файла)
var browsersync = require('browser-sync').create();// (автоматическое обновление)
var base64 = require('gulp-base64');
var uglify = require('gulp-uglify');
var connect = require('connect');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();
var path = require('path');
var serveStatic = require('serve-static');

gulp.task('less', function () {
    return gulp.src('styles/*.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ],
            plugins: [autoprefix]
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('styles'));
});

gulp.task('gulp-uglify', function(){
    gulp.src('scripts/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('scripts/js'))
});


gulp.task('build', function () {
    return gulp.src('styles/*.css')
        .pipe(base64())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./public/css'));
});

// gulp.task('serve', function(){
//     browserSync.init({
//         server:  'public'
//
//     });
//
//     // смотреть за файлами всеми less
//     gulp.watch('src/**/*.*', gulp.series('build13', reloader));
// });

// Локальный сервер для разработки
gulp.task('http-server', function() {
    connect()
        .use(require('connect-livereload')())
        .use(serveStatic('markup'))
        .listen('9000');

    console.log('Server listening on http://localhost:9000');
});

gulp.task('watch', function() {
    // Предварительная сборка проекта
    gulp.run('build');
    gulp.run('gulp-uglify');

    // Подключаем Livereload
    server.listen(35729, function(err) {
        if (err) return console.log(err);

        gulp.watch('styles/**/*.*', function() {
            gulp.run('build');
        });
        gulp.watch('scripts/**/*.*', function() {
            gulp.run('gulp-uglify');
        });
        gulp.watch('markup/index.html', function() {

        });

    });
    gulp.run('http-server');
});

//
// var config = {
//     paths:{
//         less: 'styles/*.less', // путь к файлам less
//         html: 'markup/index.html' // путь к index.html
//     },
//     output:{
//         cssname: 'rezstyle.css', // все файлы less, данного проекта, сохраняем в один файл rezstyle.css
//         path: 'styles' // путь к файлу css
//     }
// };
//
// gulp.task('less', function(){
//     // получаем все файлы less, инициализируем sourcemaps, компилируем less в css, объединение всех less в rezstyle.css, добавление автопрефиксов, минификация css, куда сохранять результат, синхронизация
//
//     return gulp.src(config.paths.less).pipe(sourcemaps.init()).pipe(less()).pipe(concat(config.output.cssname)).pipe(autoprefixer()).pipe(cleancss()).pipe(sourcemaps.write()).pipe(gulp.dest(config.output.path)).pipe(browsersync.stream());
// });
//

//

//
// // запуск функций less и serve
// gulp.task('default', ['less', 'serve']);