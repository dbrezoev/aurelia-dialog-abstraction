import {DialogController} from 'aurelia-dialog';
import {inject, bindable} from 'aurelia-framework';
import '../../jspm_packages/npm/aurelia-dialog@0.5.0/dialog.css!';

@inject(DialogController)
export class DialogOptions {
  constructor(controller) {
    this.controller = controller;
  }

  activate(opts) {
    opts = opts || {};

    this.title = opts.title;
    this.msg = opts.msg;
    this.okBtnText = opts.okBtnText || 'OK';
    this.cancelBtnText = opts.cancelBtnText || 'Откажи';
    this.showCancelButton = opts.showCancelButton;

    this.viewModel = opts.viewModel;
    this.model = opts.model;
  }
}
