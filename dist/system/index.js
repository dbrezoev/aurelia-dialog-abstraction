System.register(['./aurelia-dialog-abstraction/dialog'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalResources('./aurelia-dialog-abstraction/dialog-options');
  }

  return {
    setters: [function (_aureliaDialogAbstractionDialog) {
      _export('Dialog', _aureliaDialogAbstractionDialog.Dialog);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRU8sV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxlQUFlLENBQUMsNkNBQTZDLENBQUMsQ0FBQztHQUV4RTs7Ozt3REFMTyxNQUFNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtEaWFsb2d9IGZyb20gJy4vYXVyZWxpYS1kaWFsb2ctYWJzdHJhY3Rpb24vZGlhbG9nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2F1cmVsaWEtZGlhbG9nLWFic3RyYWN0aW9uL2RpYWxvZy1vcHRpb25zJyk7XG4gIC8vYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vYXVyZWxpYS1kaWFsb2ctYWJzdHJhY3Rpb24vZGlhbG9nJyk7XG59XG4iXX0=
