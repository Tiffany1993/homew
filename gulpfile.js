var gulp = require("gulp");
var scss = require("gulp-scss");

gulp.task("scss",function(){
	gulp.src("css/style.scss").pipe(scss()).pipe(gulp.dest("./dist"))
})

gulp.task('server',['start'],function(){
	gulp.src('index.html')
		.pipe(server({
		/*自动打开页面*/
		open:true,
		/*是否启动服务*/
		livereload:true,
		/*显示列表*/
		directoryListing:true
	}))
})

gulp.task('start',function(){
	gulp.watch('./css/*.scss',['scss']); 
	
	
})