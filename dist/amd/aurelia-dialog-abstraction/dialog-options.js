define(['exports', 'aurelia-dialog', 'aurelia-framework', 'aurelia-dialog/dialog.css'], function (exports, _aureliaDialog, _aureliaFramework, _aureliaDialogDialogCss) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var DialogOptions = (function () {
    function DialogOptions(controller) {
      _classCallCheck(this, _DialogOptions);

      this.controller = controller;
    }

    DialogOptions.prototype.activate = function activate(opts) {
      opts = opts || {};

      this.title = opts.title;
      this.msg = opts.msg;
      this.okBtnText = opts.okBtnText || 'OK';
      this.cancelBtnText = opts.cancelBtnText || 'Откажи';
      this.showCancelButton = opts.showCancelButton;

      this.viewModel = opts.viewModel;
      this.model = opts.model;
    };

    var _DialogOptions = DialogOptions;
    DialogOptions = _aureliaFramework.inject(_aureliaDialog.DialogController)(DialogOptions) || DialogOptions;
    return DialogOptions;
  })();

  exports.DialogOptions = DialogOptions;
});