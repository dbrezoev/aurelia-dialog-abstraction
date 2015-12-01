define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function configure(aurelia) {
    aurelia.globalResources('./aurelia-dialog-abstraction/dialog');
  }
});