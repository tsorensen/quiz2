'use strict';

var expect = require('chai').expect;

function testFunc(method, input, output) {
  it(JSON.stringify(input, null), function () {
    expect(method(input)).to.be.equal(output);
  });
}

describe('longest-string', function () {
  var test = testFunc.bind(null, require('../problems/longest-string'));

  test([
    'blah',
    'foo',
    'bar',
    'hello'
  ], 'hello');

  test([
    'never',
    'gonna',
    'give',
    'rolled',
    'you',
    'up'
  ], 'rolled');

  test([
    {foo: 'bar'},
    'what',
    42234845,
    ['I\'m', 'afraid', 'I can\'t', 'do', 'that', 'dave'],
    'foo'
  ], 'what');

  test([
    'angular',
    {length: 10},
    'foo'
  ], 'angular');

});



describe('array-sum', function () {
  var test = testFunc.bind(null, require('../problems/array-sum'));

  test([], 0);

  test([1, 2, 4, 3], 10);

  test([20, 63, 3], 86);

  test([
    5,
    [10, 15],
    20,
    [25, [30], 35]
  ], 140);

});



describe('bind-name', function () {
  var bindName = require('../problems/bind-name');

  it('should bind the name to a function', function () {
    function greeting(name, message) {
      return message + ', ' + name;
    }
    var jack = bindName('Jack', 'Black', greeting);
    var hobar = bindName('Hobar', 'Jackson', greeting);
    expect(jack('Hello')).to.be.equal('Hello, Jack Black');
    expect(jack('Dear')).to.be.equal('Dear, Jack Black');
    expect(hobar('Well')).to.be.equal('Well, Hobar Jackson');
    expect(hobar('To You')).to.be.equal('To You, Hobar Jackson');
  });
});
