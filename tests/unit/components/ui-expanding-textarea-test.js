import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('ui-expanding-textarea', {
  // specify the other units that are required for this test
  // needs: ['component:ui-expanding-textarea']
});

test('it renders', function(assert) {
  assert.expect(1);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  // this.render();
  // assert.equal(component._state, 'inDOM');
});
