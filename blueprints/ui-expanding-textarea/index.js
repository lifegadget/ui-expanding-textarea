module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  afterInstall: function() {
    this.ui.writeLine('Installing bower dependency of "expanding-textareas"');
    return this.addBowerPackagesToProject([
  	   {name: 'expanding-textareas', target: '0.2.0'}
    ]);
 	}
};
