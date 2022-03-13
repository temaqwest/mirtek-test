/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

// Main module (Gulp) ☜(ﾟヮﾟ☜)
import gulp from 'gulp';

// Import all paths
import { path } from './gulp/config/path.js';

// Import plugins
import { plugins } from './gulp/config/plugins.js';


global.app = {
    path,
    plugins,
    gulp
}

// Import tasks
import { copy } from './gulp/tasks/copy.js';
import { clean } from './gulp/tasks/clean.js';
import { templates } from './gulp/tasks/templates.js';
import { browserServer } from './gulp/tasks/browserServer.js'


// Watchers
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch([path.watch.html.components, path.watch.html.templates], templates);
}

const mainTasks = gulp.parallel(copy, templates);

// Development mode tasks
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, browserServer));


gulp.task('default', dev);
