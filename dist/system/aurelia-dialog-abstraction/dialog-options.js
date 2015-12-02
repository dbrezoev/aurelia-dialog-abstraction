System.register(['aurelia-dialog', 'aurelia-framework', 'aurelia-dialog/dialog.css!'], function (_export) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZGlhbG9nLWFic3RyYWN0aW9uL2RpYWxvZy1vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQ0FLYSxhQUFhOzs7Ozs7d0NBTGxCLGdCQUFnQjs7aUNBQ2hCLE1BQU07bUNBQUUsUUFBUTs7O0FBSVgsbUJBQWE7QUFDYixpQkFEQSxhQUFhLENBQ1osVUFBVSxFQUFFOzs7QUFDdEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7O0FBSFUscUJBQWEsV0FLeEIsUUFBUSxHQUFBLGtCQUFDLElBQUksRUFBRTtBQUNiLGNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUVsQixjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDeEIsY0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7QUFDeEMsY0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQztBQUNwRCxjQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztBQUU5QyxjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDaEMsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pCOzs2QkFoQlUsYUFBYTtBQUFiLHFCQUFhLEdBRHpCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNaLGFBQWEsS0FBYixhQUFhO2VBQWIsYUFBYSIsImZpbGUiOiJhdXJlbGlhLWRpYWxvZy1hYnN0cmFjdGlvbi9kaWFsb2ctb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlhbG9nQ29udHJvbGxlcn0gZnJvbSAnYXVyZWxpYS1kaWFsb2cnO1xuaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJ2F1cmVsaWEtZGlhbG9nL2RpYWxvZy5jc3MhJztcblxuQGluamVjdChEaWFsb2dDb250cm9sbGVyKVxuZXhwb3J0IGNsYXNzIERpYWxvZ09wdGlvbnMge1xuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKSB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgfVxuXG4gIGFjdGl2YXRlKG9wdHMpIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIHRoaXMudGl0bGUgPSBvcHRzLnRpdGxlO1xuICAgIHRoaXMubXNnID0gb3B0cy5tc2c7XG4gICAgdGhpcy5va0J0blRleHQgPSBvcHRzLm9rQnRuVGV4dCB8fCAnT0snO1xuICAgIHRoaXMuY2FuY2VsQnRuVGV4dCA9IG9wdHMuY2FuY2VsQnRuVGV4dCB8fCAn0J7RgtC60LDQttC4JztcbiAgICB0aGlzLnNob3dDYW5jZWxCdXR0b24gPSBvcHRzLnNob3dDYW5jZWxCdXR0b247XG5cbiAgICB0aGlzLnZpZXdNb2RlbCA9IG9wdHMudmlld01vZGVsO1xuICAgIHRoaXMubW9kZWwgPSBvcHRzLm1vZGVsO1xuICB9XG59XG4iXX0=
