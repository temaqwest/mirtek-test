/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */
import webpack from "webpack-stream";

export const jsBuild = () => {
    return app.gulp.src(
        [
            app.path.src.js.assetsScripts,
            app.path.src.js.components,
        ],
        { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JavaScript",
                message: "Error: <%= error.message %>",
            })
        ))
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'app.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
}