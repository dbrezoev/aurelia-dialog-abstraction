System.register(['aurelia-dialog', 'aurelia-framework'], function (_export) {
  'use strict';

  var DialogController, inject, bindable, DialogOptions;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDialog) {
      DialogController = _aureliaDialog.DialogController;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZGlhbG9nLWFic3RyYWN0aW9uL2RpYWxvZy1vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQ0FJYSxhQUFhOzs7Ozs7d0NBSmxCLGdCQUFnQjs7aUNBQ2hCLE1BQU07bUNBQUUsUUFBUTs7O0FBR1gsbUJBQWE7QUFDYixpQkFEQSxhQUFhLENBQ1osVUFBVSxFQUFFOzs7QUFDdEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7O0FBSFUscUJBQWEsV0FLeEIsUUFBUSxHQUFBLGtCQUFDLElBQUksRUFBRTtBQUNiLGNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUVsQixjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDeEIsY0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7QUFDeEMsY0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQztBQUNwRCxjQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztBQUU5QyxjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDaEMsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pCOzs2QkFoQlUsYUFBYTtBQUFiLHFCQUFhLEdBRHpCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNaLGFBQWEsS0FBYixhQUFhO2VBQWIsYUFBYSIsImZpbGUiOiJhdXJlbGlhLWRpYWxvZy1hYnN0cmFjdGlvbi9kaWFsb2ctb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlhbG9nQ29udHJvbGxlcn0gZnJvbSAnYXVyZWxpYS1kaWFsb2cnO1xuaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRGlhbG9nQ29udHJvbGxlcilcbmV4cG9ydCBjbGFzcyBEaWFsb2dPcHRpb25zIHtcbiAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIH1cblxuICBhY3RpdmF0ZShvcHRzKSB7XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICB0aGlzLnRpdGxlID0gb3B0cy50aXRsZTtcbiAgICB0aGlzLm1zZyA9IG9wdHMubXNnO1xuICAgIHRoaXMub2tCdG5UZXh0ID0gb3B0cy5va0J0blRleHQgfHwgJ09LJztcbiAgICB0aGlzLmNhbmNlbEJ0blRleHQgPSBvcHRzLmNhbmNlbEJ0blRleHQgfHwgJ9Ce0YLQutCw0LbQuCc7XG4gICAgdGhpcy5zaG93Q2FuY2VsQnV0dG9uID0gb3B0cy5zaG93Q2FuY2VsQnV0dG9uO1xuXG4gICAgdGhpcy52aWV3TW9kZWwgPSBvcHRzLnZpZXdNb2RlbDtcbiAgICB0aGlzLm1vZGVsID0gb3B0cy5tb2RlbDtcbiAgfVxufVxuIl19
