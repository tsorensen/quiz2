'use strict';

var expect = require('chai').expect;

describe('longest-string', function () {
  var longestString = require('../problems/longest-string');

  it('should get the longest string from array of strings', function () {
    var arr = ['blah', 'foo', 'bar', 'hello'];
    expect(longestString(arr)).to.be.equal('hello');
    arr = ['rolled', 'never', 'gonna', 'give', 'you', 'up'];
    expect(longestString(arr)).to.be.equal('rickrolled');
  });

  it('should get the longest string from array of mixed values', function () {
    var arr = [
      {foo: 'bar'},
      'what',
      42234845,
      ['I\'m', 'afraid', 'I can\'t', 'do', 'that', 'dave'],
      'foo'
    ];
    expect(longestString(arr)).to.be.equal('what');
    arr = [
      'angular',
      {length: 10},
      'foo'
    ];
    expect(longestString(arr)).to.be.equal('angular');
  });

});



describe('array-sum', function () {
  var arraySum = require('../problems/array-sum');

  it('should get the sum of an array', function () {
    expect(arraySum([])).to.be.equal(0);
    expect(arraySum([1, 2, 4, 3])).to.be.equal(10);
    expect(arraySum([20, 63, 3])).to.be.equal(86);
  });

  it('should get the sum of an array with sub arrays', function () {
    expect(arraySum([
      5,
      [10, 15],
      20,
      [25, [30], 35]
    ])).to.be.equal(140);
  });
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
