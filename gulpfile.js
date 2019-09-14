let gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('app/styles/main.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 10 versions'], //массив. поддержка последних 10 версий браузеров
            {
                cascade: true //каскадность кода на выходе
            })
        )
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/styles')) // Выгружаем результата в папку app/styles
});