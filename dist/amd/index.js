define(['exports', './aurelia-dialog-abstraction/dialog'], function (exports, _aureliaDialogAbstractionDialog) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;
  exports.Dialog = _aureliaDialogAbstractionDialog.Dialog;

  function configure(aurelia) {
    aurelia.globalResources('./aurelia-dialog-abstraction/dialog-options');
    aurelia.globalResources('./aurelia-dialog-abstraction/dialog');
  }
});