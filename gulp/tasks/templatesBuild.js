/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';

export const templatesBuild = () => {
  return app.gulp.src([app.path.src.html.pages])
      .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML/Pug",
            message: "Error: <%= error.message %>",
          })
      ))
      .pipe(pug({
        pretty: true,
        verbose: true
      }))
      .pipe(versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ]
        },
        'output': {
          'file': 'gulp/version.json'
        }
      }))
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream());
};