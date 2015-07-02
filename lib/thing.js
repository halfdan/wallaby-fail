var knex = require('knex');

function Thing() {

}

Thing.prototype.init = function (options) {
  this._knex = knex(options);
  return 14;
};

Thing.prototype.testable = function (options) {
  return options.key;
};

module.exports = Thing;