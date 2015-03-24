module.exports = {
  description: 'Installing the underlying JS component for expanding-textareas',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
	  return this.addBowerPackageToProject('expanding-textareas');
  }
};
