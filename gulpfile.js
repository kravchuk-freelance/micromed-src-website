// Initialize modules
const gulp         = require('gulp');
const sass         = require('gulp-sass');
sass.compiler      = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
const browserSync  = require('browser-sync').create();
const iconfont     = require('gulp-iconfont');
const iconfontCss  = require('gulp-iconfont-css');
const fontName     = 'iconsfont';
const media_queries = require('gulp-group-css-media-queries');


var paths = {
    styles: {
        src: './scss/**/*.scss',
        dest: './css/'
    },
    scripts: {
        src: './js/**/*.js',
        dest: './scripts/'
    },
    html: {
        src: './*.html',
        dest: './'
    },
    iconFont: {
        src: './img/svg/*.svg',
        path: './scss/templates/_icons.scss',
        targetPath: '../../scss/_icons.scss',
        fontPath: '../fonts/iconsfont/',
        dest: './fonts/iconsfont/'
    }
};


function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        // .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sass().on('error', sass.logError))
		.pipe(media_queries())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.reload({stream: true}));
}


function icons(){
	// var runTimestamp = Math.round(Date.now()/1000);
	
	gulp.src([iconFont.src])
	.pipe(iconfontCss({
	  fontName:   fontName,
	  path:       paths.iconFont.path,
	  targetPath: paths.iconFont.targetPath,
	  fontPath:   paths.iconFont.fontPath
	}))
	// .pipe(gulp.dest('fonts/icons/'))
	.pipe(iconfont({
		fontName: fontName,
		startUnicode: false,
		prependUnicode: false,
		fontHeight: 1001,
		normalize: true,
		formats: ['ttf', 'eot', 'woff', 'svg', 'woff2'],
	}))
	.pipe(gulp.dest(iconFont.dest));
};


function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src).on('change', browserSync.reload);
    gulp.watch(paths.html.src).on('change', browserSync.reload);
}


function server() {
    browserSync.init({
        open: false,
        // watch: true,
        server: {
            baseDir: "./"
        },
        notify: false
    });
    watch();
}



// exports.styles = styles;
// exports.scripts = scripts;
// exports.watch = watch;
exports.icons = icons;
exports.server = server;