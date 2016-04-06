/*jshint node:true*/
module.exports = {
  description: 'install Bower deps',

  normalizeEntityName: function() {
  },
  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      {name: 'expanding-textareas', target: '0.2.0'}
    ]);
  }
};
