const { src, dest, watch, task } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

const sassCompile = () => {
  return src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("css/"))
    .pipe(browserSync.stream());
};
const serve = () => {
  browserSync.init({ server: { baseDir: "./" } });
  watch("sass/**/*.scss", sassCompile);
  watch("*.html").on("change", browserSync.reload);
};
task("default", serve);
