define(['exports', 'aurelia-dialog', 'aurelia-framework', './dialog-options'], function (exports, _aureliaDialog, _aureliaFramework, _dialogOptions) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var CustomDialog = (function () {
    function CustomDialog(dialogService) {
      _classCallCheck(this, _CustomDialog);

      this.dialogService = dialogService;
    }

    CustomDialog.prototype.confirm = function confirm(opts) {
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

    CustomDialog.prototype.showCustomViewModel = function showCustomViewModel(opts) {
      opts = opts || {};

      if (opts.msg) {
        throw new Error('Argument Exception. Define model instead of message!');
      }

      if (!opts.viewModel) {
        throw new Error('Argument Exception. Model is not defined.');
      }

      return this._showDialog(opts);
    };

    CustomDialog.prototype.showMessage = function showMessage(opts) {
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

      this._showDialog(messageOptions);
    };

    CustomDialog.prototype._showDialog = function _showDialog(options) {
      var resultPromise = this.dialogService.open({ viewModel: Dialog, model: options }).then(function (result) {
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

    var _CustomDialog = CustomDialog;
    CustomDialog = _aureliaFramework.inject(_aureliaDialog.DialogService)(CustomDialog) || CustomDialog;
    return CustomDialog;
  })();

  exports.CustomDialog = CustomDialog;
});