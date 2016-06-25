const Hashids = require('hashids');
const constants = require('./constants');
const hashids = new Hashids(constants.salt.base);

class Base {
  constructor(type, id=hashids.encode(Base.COUNT++)) {
    this.id = id;
    this.type = type
  }
};

Base.COUNT = 0;
module.exports = Base;
