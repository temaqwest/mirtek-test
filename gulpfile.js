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
import { copyFiles } from './gulp/tasks/copyFiles.js';
import { cleanDist } from './gulp/tasks/cleanDist.js';
import { templatesBuild } from './gulp/tasks/templatesBuild.js';
import { browserServer } from './gulp/tasks/browserServer.js'
import { stylesProcess } from './gulp/tasks/stylesProcess.js'


// Watchers
function watcher() {
    gulp.watch(path.watch.files, copyFiles);
    gulp.watch([path.watch.html.components, path.watch.html.templates], templatesBuild);
    gulp.watch([path.watch.style.components, path.watch.style.assets], stylesProcess);
}

const mainTasks = gulp.parallel(copyFiles, templatesBuild, stylesProcess);

// Development mode tasks
const dev = gulp.series(cleanDist, mainTasks, gulp.parallel(watcher, browserServer));


gulp.task('default', dev);
