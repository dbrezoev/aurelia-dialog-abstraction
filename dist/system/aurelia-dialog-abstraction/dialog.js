System.register(['aurelia-dialog', 'aurelia-framework', './dialog-options'], function (_export) {
  'use strict';

  var DialogService, inject, DialogOptions, Dialog;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDialog) {
      DialogService = _aureliaDialog.DialogService;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_dialogOptions) {
      DialogOptions = _dialogOptions.DialogOptions;
    }],
    execute: function () {
      Dialog = (function () {
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

          this._showDialog(messageOptions);
        };

        Dialog.prototype._showDialog = function _showDialog(options) {
          var resultPromise = this.dialogService.open({ viewModel: DialogOptions, model: options }).then(function (result) {
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
        Dialog = inject(DialogService)(Dialog) || Dialog;
        return Dialog;
      })();

      _export('Dialog', Dialog);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZGlhbG9nLWFic3RyYWN0aW9uL2RpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NENBS2EsTUFBTTs7Ozs7O3FDQUxYLGFBQWE7O2lDQUNiLE1BQU07O3FDQUNOLGFBQWE7OztBQUdSLFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsYUFBYSxFQUFFOzs7QUFDekIsY0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDcEM7O0FBSlUsY0FBTSxXQU1qQixPQUFPLEdBQUEsaUJBQUMsSUFBSSxFQUFFO0FBQ1osY0FBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7O0FBRWxCLGNBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQ1osa0JBQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztXQUNoRTs7QUFFRCxjQUFJLE9BQU8sR0FBRztBQUNaLGlCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXO0FBQ2hDLGVBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztBQUNiLHFCQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJO0FBQ2pDLHlCQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFBSSxRQUFRO0FBQzdDLDRCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJO1dBQ2hELENBQUM7O0FBRUYsaUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQzs7QUF0QlUsY0FBTSxXQXdCakIsbUJBQW1CLEdBQUEsNkJBQUMsSUFBSSxFQUFFO0FBQ3hCLGNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUVsQixjQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDWixrQkFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1dBQ3pFOztBQUVELGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ25CLGtCQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7V0FDOUQ7O0FBRUQsaUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjs7QUFwQ1UsY0FBTSxXQXNDakIsV0FBVyxHQUFBLHFCQUFDLElBQUksRUFBRTtBQUNoQixjQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7QUFFbEIsY0FBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtBQUM3QyxrQkFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1dBQ2hFOztBQUVELGNBQUksY0FBYyxHQUFHO0FBQ25CLGlCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXO0FBQ2hDLGVBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztBQUNiLHFCQUFTLEVBQUUsSUFBSTtBQUNmLDRCQUFnQixFQUFFLEtBQUs7V0FDeEIsQ0FBQzs7QUFFRixjQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2xDOztBQXJEVSxjQUFNLFdBdURqQixXQUFXLEdBQUEscUJBQUMsT0FBTyxFQUFFO0FBQ25CLGNBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLEVBQUs7QUFDMUcsbUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLGtCQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTs7QUFFeEIsdUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO2VBQ2hDLE1BQU07QUFDTCx1QkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUM7ZUFDakM7YUFDRixDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7O0FBRUgsaUJBQU8sYUFBYSxDQUFDO1NBQ3RCOztzQkFwRVUsTUFBTTtBQUFOLGNBQU0sR0FEbEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUNULE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTSIsImZpbGUiOiJhdXJlbGlhLWRpYWxvZy1hYnN0cmFjdGlvbi9kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpYWxvZ1NlcnZpY2V9IGZyb20gJ2F1cmVsaWEtZGlhbG9nJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0RpYWxvZ09wdGlvbnN9IGZyb20gJy4vZGlhbG9nLW9wdGlvbnMnO1xuXG5AaW5qZWN0KERpYWxvZ1NlcnZpY2UpXG5leHBvcnQgY2xhc3MgRGlhbG9nIHtcblxuICBjb25zdHJ1Y3RvcihkaWFsb2dTZXJ2aWNlKSB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlID0gZGlhbG9nU2VydmljZTtcbiAgfVxuXG4gIGNvbmZpcm0ob3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYoIW9wdHMubXNnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50IEV4Y2VwdGlvbi4gTWVzc2FnZSBpcyBub3QgZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiBvcHRzLnRpdGxlIHx8ICfQktC90LjQvNCw0L3QuNC1IScsXG4gICAgICBtc2c6IG9wdHMubXNnLFxuICAgICAgb2tCdG5UZXh0OiBvcHRzLm9rQnRuVGV4dCB8fCAnT0snLFxuICAgICAgY2FuY2VsQnRuVGV4dDogb3B0cy5jYW5jZWxCdG5UZXh0IHx8ICfQntGC0LrQsNC20LgnLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogb3B0cy5zaG93Q2FuY2VsQnV0dG9uIHx8IHRydWVcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dEaWFsb2cob3B0aW9ucyk7XG4gIH1cblxuICBzaG93Q3VzdG9tVmlld01vZGVsKG9wdHMpIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChvcHRzLm1zZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCBFeGNlcHRpb24uIERlZmluZSBtb2RlbCBpbnN0ZWFkIG9mIG1lc3NhZ2UhJyk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRzLnZpZXdNb2RlbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCBFeGNlcHRpb24uIE1vZGVsIGlzIG5vdCBkZWZpbmVkLicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zaG93RGlhbG9nKG9wdHMpO1xuICB9XG5cbiAgc2hvd01lc3NhZ2Uob3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYgKG9wdHMubXNnID09PSB1bmRlZmluZWQgfHwgb3B0cy5tc2cgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50IEV4Y2VwdGlvbi4gTWVzc2FnZSBpcyBub3QgZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICBsZXQgbWVzc2FnZU9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogb3B0cy50aXRsZSB8fCAn0JLQvdC40LzQsNC90LjQtSEnLFxuICAgICAgbXNnOiBvcHRzLm1zZyxcbiAgICAgIG9rQnRuVGV4dDogJ09LJyxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuX3Nob3dEaWFsb2cobWVzc2FnZU9wdGlvbnMpO1xuICB9XG5cbiAgX3Nob3dEaWFsb2cob3B0aW9ucykge1xuICAgIGxldCByZXN1bHRQcm9taXNlID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oeyB2aWV3TW9kZWw6IERpYWxvZ09wdGlvbnMsIG1vZGVsOiBvcHRpb25zIH0gKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmICghcmVzdWx0Lndhc0NhbmNlbGxlZCkge1xuXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQub3V0cHV0IHx8IHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0Lm91dHB1dCB8fCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gIH1cbn1cbiJdfQ==
