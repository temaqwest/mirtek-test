/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

export const browserServer = (done) => {
    app.plugins.browserSync.init({
        server: {
          baseDir: `${app.path.build.html}`
        },
        notify: false,
        port: 3000,
    })
}