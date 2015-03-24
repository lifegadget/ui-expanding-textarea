/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/expanding-textareas/expanding.js');
app.import('vendor/ui-expanding-textarea/ui-expanding-textarea.css');

module.exports = app.toTree();
