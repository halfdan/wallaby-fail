var sinon = require('sinon'),
    should = require('should'),
    path = require('path'),

    Thing = require('../lib/thing');

// To stop jshint complaining
should.equal(true, true);

/*global describe, it, beforeEach */
describe('Thing', function () {
  var thing;

  beforeEach(function () {
    thing = new Thing();
  });

  describe('#testable', function() {
    it('returns object.key', function() {
      var obj = {
        key: 12
      };

      should.equal(thing.testable(obj), 12);
    });
  });

  describe('#init', function() {
    it('returns 14', function() {
      var conf = {
        client: 'sqlite3',
        connection: {
          filename: path.join(__dirname, '../development.sqlite3')
        },
        debug: false
      };

      should.equal(thing.init(conf), 14);
    });
  });

});