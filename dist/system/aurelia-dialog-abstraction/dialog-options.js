System.register(['aurelia-dialog', 'aurelia-framework', 'aurelia-dialog/dialog.css'], function (_export) {
  'use strict';

  var DialogController, inject, bindable, DialogOptions;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDialog) {
      DialogController = _aureliaDialog.DialogController;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaDialogDialogCss) {}],
    execute: function () {
      DialogOptions = (function () {
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
        DialogOptions = inject(DialogController)(DialogOptions) || DialogOptions;
        return DialogOptions;
      })();

      _export('DialogOptions', DialogOptions);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZGlhbG9nLWFic3RyYWN0aW9uL2RpYWxvZy1vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQ0FLYSxhQUFhOzs7Ozs7d0NBTGxCLGdCQUFnQjs7aUNBQ2hCLE1BQU07bUNBQUUsUUFBUTs7O0FBSVgsbUJBQWE7QUFDYixpQkFEQSxhQUFhLENBQ1osVUFBVSxFQUFFOzs7QUFDdEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7O0FBSFUscUJBQWEsV0FLeEIsUUFBUSxHQUFBLGtCQUFDLElBQUksRUFBRTtBQUNiLGNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUVsQixjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDeEIsY0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7QUFDeEMsY0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQztBQUNwRCxjQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztBQUU5QyxjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDaEMsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pCOzs2QkFoQlUsYUFBYTtBQUFiLHFCQUFhLEdBRHpCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNaLGFBQWEsS0FBYixhQUFhO2VBQWIsYUFBYSIsImZpbGUiOiJhdXJlbGlhLWRpYWxvZy1hYnN0cmFjdGlvbi9kaWFsb2ctb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlhbG9nQ29udHJvbGxlcn0gZnJvbSAnYXVyZWxpYS1kaWFsb2cnO1xuaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJ2F1cmVsaWEtZGlhbG9nL2RpYWxvZy5jc3MnO1xuXG5AaW5qZWN0KERpYWxvZ0NvbnRyb2xsZXIpXG5leHBvcnQgY2xhc3MgRGlhbG9nT3B0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICB9XG5cbiAgYWN0aXZhdGUob3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgdGhpcy50aXRsZSA9IG9wdHMudGl0bGU7XG4gICAgdGhpcy5tc2cgPSBvcHRzLm1zZztcbiAgICB0aGlzLm9rQnRuVGV4dCA9IG9wdHMub2tCdG5UZXh0IHx8ICdPSyc7XG4gICAgdGhpcy5jYW5jZWxCdG5UZXh0ID0gb3B0cy5jYW5jZWxCdG5UZXh0IHx8ICfQntGC0LrQsNC20LgnO1xuICAgIHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9IG9wdHMuc2hvd0NhbmNlbEJ1dHRvbjtcblxuICAgIHRoaXMudmlld01vZGVsID0gb3B0cy52aWV3TW9kZWw7XG4gICAgdGhpcy5tb2RlbCA9IG9wdHMubW9kZWw7XG4gIH1cbn1cbiJdfQ==
