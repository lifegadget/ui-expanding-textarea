import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const {computed, observer, $, A, run, on, typeOf, debug, defineProperty, get, set, inject, isEmpty} = Ember;  // jshint ignore:line
import layout from '../templates/components/ui-expanding-textarea';

export default Ember.Component.extend({
	layout: layout,
	tagName: 'textarea',
	attributeBindings: ['_wrap:wrap', 'rows', 'placeholder'],
	classNames: ['ui-expanding-textarea'],
  classNameBindings: ['style', 'align'],
	value: null,
	valueListener: observer('value', function() {
		this.$('textarea').val(this.get('value')).change();
	}),
	wrap: true,
	_wrap: computed('wrap', function() {
		return this.get('wrap') ? 'on' : 'off';
	}),
	rows: 1,
  style: 'form-control',
  align: 'left',

	initialized: false,
	_initialize: on('init', function() {
		var self = this;
		run.schedule('afterRender', () => {
			this.$().expanding({
				update: function() {
					self.set('value',self.$().val());
					run.debounce(self, function() {
						self.sendAction('update');
					},300);
				}
			});
			this.set('initialized', true);
		});
	}),
	_teardown: on('willDestroyElement', function() {
		this.$().expanding('destroy');
	})
});
