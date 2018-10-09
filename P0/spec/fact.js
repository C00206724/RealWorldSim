var path = require('path');
var expect = require('chai').expect;

var fact = require(path.join(__dirname, '..', './fact.js'));

describe('fact()', = function() {
  'use strict';

  it('exists', function () {
    expect(fact).to.be.a('function');

  });

  it('maths', function () {
    expect(fact(4)).to.equal(24);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
