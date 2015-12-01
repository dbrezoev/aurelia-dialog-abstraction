export {Dialog} from './aurelia-dialog-abstraction/dialog';

export function configure(aurelia, callback) {
  aurelia.globalResources('./aurelia-dialog-abstraction/dialog-options');
  //aurelia.globalResources('./aurelia-dialog-abstraction/dialog');
}
