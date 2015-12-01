System.register(['./aurelia-dialog-abstraction/dialog'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia, callback) {
    aurelia.globalResources('./aurelia-dialog-abstraction/dialog-options');
  }

  return {
    setters: [function (_aureliaDialogAbstractionDialog) {
      _export('Dialog', _aureliaDialogAbstractionDialog.Dialog);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRU8sV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQUMzQyxXQUFPLENBQUMsZUFBZSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7R0FFeEU7Ozs7d0RBTE8sTUFBTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7RGlhbG9nfSBmcm9tICcuL2F1cmVsaWEtZGlhbG9nLWFic3RyYWN0aW9uL2RpYWxvZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSwgY2FsbGJhY2spIHtcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vYXVyZWxpYS1kaWFsb2ctYWJzdHJhY3Rpb24vZGlhbG9nLW9wdGlvbnMnKTtcbiAgLy9hdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9hdXJlbGlhLWRpYWxvZy1hYnN0cmFjdGlvbi9kaWFsb2cnKTtcbn1cbiJdfQ==
