System.register(['aurelia-dialog', 'aurelia-framework', './dialog-options'], function (_export) {
  'use strict';

  var DialogService, inject, DialogOptions, CustomDialog;

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
      CustomDialog = (function () {
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
        CustomDialog = inject(DialogService)(CustomDialog) || CustomDialog;
        return CustomDialog;
      })();

      _export('CustomDialog', CustomDialog);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZGlhbG9nLWFic3RyYWN0aW9uL2RpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NENBS2EsWUFBWTs7Ozs7O3FDQUxqQixhQUFhOztpQ0FDYixNQUFNOztxQ0FDTixhQUFhOzs7QUFHUixrQkFBWTtBQUVaLGlCQUZBLFlBQVksQ0FFWCxhQUFhLEVBQUU7OztBQUN6QixjQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNwQzs7QUFKVSxvQkFBWSxXQU12QixPQUFPLEdBQUEsaUJBQUMsSUFBSSxFQUFFO0FBQ1osY0FBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7O0FBRWxCLGNBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQ1osa0JBQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztXQUNoRTs7QUFFRCxjQUFJLE9BQU8sR0FBRztBQUNaLGlCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXO0FBQ2hDLGVBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztBQUNiLHFCQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJO0FBQ2pDLHlCQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFBSSxRQUFRO0FBQzdDLDRCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJO1dBQ2hELENBQUM7O0FBRUYsaUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQzs7QUF0QlUsb0JBQVksV0F3QnZCLG1CQUFtQixHQUFBLDZCQUFDLElBQUksRUFBRTtBQUN4QixjQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7QUFFbEIsY0FBSSxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQ1osa0JBQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztXQUN6RTs7QUFFRCxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNuQixrQkFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1dBQzlEOztBQUVELGlCQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7O0FBcENVLG9CQUFZLFdBc0N2QixXQUFXLEdBQUEscUJBQUMsSUFBSSxFQUFFO0FBQ2hCLGNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUVsQixjQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFO0FBQzdDLGtCQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7V0FDaEU7O0FBRUQsY0FBSSxjQUFjLEdBQUc7QUFDbkIsaUJBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVc7QUFDaEMsZUFBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2IscUJBQVMsRUFBRSxJQUFJO0FBQ2YsNEJBQWdCLEVBQUUsS0FBSztXQUN4QixDQUFDOztBQUVGLGNBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbEM7O0FBckRVLG9CQUFZLFdBdUR2QixXQUFXLEdBQUEscUJBQUMsT0FBTyxFQUFFO0FBQ25CLGNBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLEVBQUs7QUFDbkcsbUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLGtCQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTs7QUFFeEIsdUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO2VBQ2hDLE1BQU07QUFDTCx1QkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUM7ZUFDakM7YUFDRixDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7O0FBRUgsaUJBQU8sYUFBYSxDQUFDO1NBQ3RCOzs0QkFwRVUsWUFBWTtBQUFaLG9CQUFZLEdBRHhCLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FDVCxZQUFZLEtBQVosWUFBWTtlQUFaLFlBQVkiLCJmaWxlIjoiYXVyZWxpYS1kaWFsb2ctYWJzdHJhY3Rpb24vZGlhbG9nLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWFsb2dTZXJ2aWNlfSBmcm9tICdhdXJlbGlhLWRpYWxvZyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtEaWFsb2dPcHRpb25zfSBmcm9tICcuL2RpYWxvZy1vcHRpb25zJztcblxuQGluamVjdChEaWFsb2dTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIEN1c3RvbURpYWxvZyB7XG5cbiAgY29uc3RydWN0b3IoZGlhbG9nU2VydmljZSkge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZSA9IGRpYWxvZ1NlcnZpY2U7XG4gIH1cblxuICBjb25maXJtKG9wdHMpIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGlmKCFvcHRzLm1zZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCBFeGNlcHRpb24uIE1lc3NhZ2UgaXMgbm90IGRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogb3B0cy50aXRsZSB8fCAn0JLQvdC40LzQsNC90LjQtSEnLFxuICAgICAgbXNnOiBvcHRzLm1zZyxcbiAgICAgIG9rQnRuVGV4dDogb3B0cy5va0J0blRleHQgfHwgJ09LJyxcbiAgICAgIGNhbmNlbEJ0blRleHQ6IG9wdHMuY2FuY2VsQnRuVGV4dCB8fCAn0J7RgtC60LDQttC4JyxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IG9wdHMuc2hvd0NhbmNlbEJ1dHRvbiB8fCB0cnVlXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLl9zaG93RGlhbG9nKG9wdGlvbnMpO1xuICB9XG5cbiAgc2hvd0N1c3RvbVZpZXdNb2RlbChvcHRzKSB7XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICBpZiAob3B0cy5tc2cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXJndW1lbnQgRXhjZXB0aW9uLiBEZWZpbmUgbW9kZWwgaW5zdGVhZCBvZiBtZXNzYWdlIScpO1xuICAgIH1cblxuICAgIGlmICghb3B0cy52aWV3TW9kZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXJndW1lbnQgRXhjZXB0aW9uLiBNb2RlbCBpcyBub3QgZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2hvd0RpYWxvZyhvcHRzKTtcbiAgfVxuXG4gIHNob3dNZXNzYWdlKG9wdHMpIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChvcHRzLm1zZyA9PT0gdW5kZWZpbmVkIHx8IG9wdHMubXNnID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCBFeGNlcHRpb24uIE1lc3NhZ2UgaXMgbm90IGRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgbGV0IG1lc3NhZ2VPcHRpb25zID0ge1xuICAgICAgdGl0bGU6IG9wdHMudGl0bGUgfHwgJ9CS0L3QuNC80LDQvdC40LUhJyxcbiAgICAgIG1zZzogb3B0cy5tc2csXG4gICAgICBva0J0blRleHQ6ICdPSycsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLl9zaG93RGlhbG9nKG1lc3NhZ2VPcHRpb25zKTtcbiAgfVxuXG4gIF9zaG93RGlhbG9nKG9wdGlvbnMpIHtcbiAgICBsZXQgcmVzdWx0UHJvbWlzZSA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKHsgdmlld01vZGVsOiBEaWFsb2csIG1vZGVsOiBvcHRpb25zIH0gKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmICghcmVzdWx0Lndhc0NhbmNlbGxlZCkge1xuXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQub3V0cHV0IHx8IHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0Lm91dHB1dCB8fCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gIH1cbn1cbiJdfQ==
