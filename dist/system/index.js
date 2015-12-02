System.register(['./aurelia-dialog-abstraction/dialog'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalResources('./aurelia-dialog-abstraction/dialog-options');
    aurelia.globalResources('./aurelia-dialog-abstraction/dialog');
  }

  return {
    setters: [function (_aureliaDialogAbstractionDialog) {
      _export('Dialog', _aureliaDialogAbstractionDialog.Dialog);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRU8sV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxlQUFlLENBQUMsNkNBQTZDLENBQUMsQ0FBQztBQUN2RSxXQUFPLENBQUMsZUFBZSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7R0FDaEU7Ozs7d0RBTE8sTUFBTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7RGlhbG9nfSBmcm9tICcuL2F1cmVsaWEtZGlhbG9nLWFic3RyYWN0aW9uL2RpYWxvZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9hdXJlbGlhLWRpYWxvZy1hYnN0cmFjdGlvbi9kaWFsb2ctb3B0aW9ucycpO1xuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9hdXJlbGlhLWRpYWxvZy1hYnN0cmFjdGlvbi9kaWFsb2cnKTtcbn1cbiJdfQ==
