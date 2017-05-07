/*jshint node:true*/
module.exports = {
  description: 'install Bower deps',

  normalizeEntityName: function() {
  },
  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      {name: 'expanding-textareas', target: '1.0.2'}
    ]);
  }
};
