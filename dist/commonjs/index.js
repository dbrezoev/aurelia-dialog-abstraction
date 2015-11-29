'use strict';

exports.__esModule = true;
exports.configure = configure;

var _aureliaDialogAbstractionDialog = require('./aurelia-dialog-abstraction/dialog');

exports.Dialog = _aureliaDialogAbstractionDialog.Dialog;

function configure(aurelia) {
  aurelia.globalResources('./aurelia-dialog-abstraction/dialog-options');
  aurelia.globalResources('./aurelia-dialog-abstraction/dialog');
}