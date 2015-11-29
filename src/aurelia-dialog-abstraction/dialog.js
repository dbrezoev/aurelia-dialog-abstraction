import {DialogService} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
import {DialogOptions} from './dialog-options';

@inject(DialogService)
export class Dialog {

  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  confirm(opts) {
    opts = opts || {};

    if(!opts.msg) {
      throw new Error('Argument Exception. Message is not defined.');
    }

    let options = {
      title: opts.title || 'Внимание!',
      msg: opts.msg,
      okBtnText: opts.okBtnText || 'OK',
      cancelBtnText: opts.cancelBtnText || 'Откажи',
      showCancelButton: opts.showCancelButton || true
    };

    return this._showDialog(options);
  }

  showCustomViewModel(opts) {
    opts = opts || {};

    if (opts.msg) {
      throw new Error('Argument Exception. Define model instead of message!');
    }

    if (!opts.viewModel) {
      throw new Error('Argument Exception. Model is not defined.');
    }

    return this._showDialog(opts);
  }

  showMessage(opts) {
    opts = opts || {};

    if (opts.msg === undefined || opts.msg === '') {
      throw new Error('Argument Exception. Message is not defined.');
    }

    let messageOptions = {
      title: opts.title || 'Внимание!',
      msg: opts.msg,
      okBtnText: 'OK',
      showCancelButton: false
    };

    return this._showDialog(messageOptions);
  }

  _showDialog(options) {
    let resultPromise = this.dialogService.open({ viewModel: DialogOptions, model: options } ).then((result) => {
      return new Promise((resolve, reject) => {
        if (!result.wasCancelled) {

          resolve(result.output || true);
        } else {
          resolve(result.output || false);
        }
      });
    });

    return resultPromise;
  }
}
