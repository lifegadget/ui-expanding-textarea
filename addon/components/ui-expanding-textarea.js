import Ember from 'ember';
import layout from '../templates/components/ui-expanding-textarea';

export default Ember.Component.extend({
	layout: layout,
	tagName: 'textarea',
	attributeBindings: ['_wrap:wrap', 'rows', 'placeholder'],
	classNames: ['ui-expanding-textarea'],
  classNameBindings: ['style', 'align'],
	value: null,
	valueListener: function() {
		this.$('textarea').val(this.get('value')).change();
	}.on('value'),
	wrap: true,
	_wrap: function() {
		return this.get('wrap') ? 'on' : 'off';
	}.property('wrap'),
	rows: 1,
  style: 'form-control',
  align: 'left',
	
	initialized: false,
	_initialize: function() {
		var self = this;
		Ember.run.next(this, function() {
			this.$().expanding({
				update: function() {
					self.set('value',self.$().val());
					Ember.run.debounce(self, function() {
						self.sendAction('update');
					},300);
				}
			});
			this.set('initialized', true);								
		});
	}.on('didInsertElement'),
	_teardown: function() {
		this.$().expanding('destroy');
	}.on('willDestroyElement')
});
