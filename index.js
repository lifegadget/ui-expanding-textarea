/* jshint node: true */
'use strict';

module.exports = {
  name: 'ui-expanding-textarea',

	description: 'textarea input that auto-expand/contracts vertically',
	included: function(app) {
		this._super.included(app);
		app.import('bower_components/expanding-textareas/expanding.js');
		app.import('vendor/ui-expanding-textarea/ui-expanding-textarea.css');
	}
};
