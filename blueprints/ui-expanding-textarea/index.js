module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  afterInstall: function() {
   return this.addBowerPackagesToProject([
		 {name: 'expanding-textareas', target: '0.2.0'}
	 ]);
 	}
};
