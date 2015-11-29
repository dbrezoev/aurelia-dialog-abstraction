define(['exports', 'aurelia-dialog', 'aurelia-framework', './dialog-options'], function (exports, _aureliaDialog, _aureliaFramework, _dialogOptions) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Dialog = (function () {
    function Dialog(dialogService) {
      _classCallCheck(this, _Dialog);

      this.dialogService = dialogService;
    }

    Dialog.prototype.confirm = function confirm(opts) {
      opts = opts || {};

      if (!opts.msg) {
        throw new Error('Argument Exception. Message is not defined.');
      }

      var options = {
        title: opts.title || 'Внимание!',
        msg: opts.msg,
        okBtnText: opts.okBtnText || 'OK',
        cancelBtnText: opts.cancelBtnText || 'Откажи',
        showCancelButton: opts.showCancelButton || true
      };

      return this._showDialog(options);
    };

    Dialog.prototype.showCustomViewModel = function showCustomViewModel(opts) {
      opts = opts || {};

      if (opts.msg) {
        throw new Error('Argument Exception. Define model instead of message!');
      }

      if (!opts.viewModel) {
        throw new Error('Argument Exception. Model is not defined.');
      }

      return this._showDialog(opts);
    };

    Dialog.prototype.showMessage = function showMessage(opts) {
      opts = opts || {};

      if (opts.msg === undefined || opts.msg === '') {
        throw new Error('Argument Exception. Message is not defined.');
      }

      var messageOptions = {
        title: opts.title || 'Внимание!',
        msg: opts.msg,
        okBtnText: 'OK',
        showCancelButton: false
      };

      return this._showDialog(messageOptions);
    };

    Dialog.prototype._showDialog = function _showDialog(options) {
      var resultPromise = this.dialogService.open({ viewModel: _dialogOptions.DialogOptions, model: options }).then(function (result) {
        return new Promise(function (resolve, reject) {
          if (!result.wasCancelled) {

            resolve(result.output || true);
          } else {
            resolve(result.output || false);
          }
        });
      });

      return resultPromise;
    };

    var _Dialog = Dialog;
    Dialog = _aureliaFramework.inject(_aureliaDialog.DialogService)(Dialog) || Dialog;
    return Dialog;
  })();

  exports.Dialog = Dialog;
});