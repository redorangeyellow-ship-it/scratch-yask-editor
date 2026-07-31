import minilog from 'log';
minilog.enable();

window.log = minilog('gui');
export default window.log;
