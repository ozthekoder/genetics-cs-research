const Hashids = require('hashids');
const constants = require('../../lib/constants');
const hashids = new Hashids(constants.salt.base);
const Base = require('../../lib/base');

describe('Base Class', () => {
  let base;

  beforeEach(() => {
    base = new Base('A');
  });

  it('should be defined', () => {
    expect(Base).to.be.ok;
    expect(hashids.decode(base.id)).to.deep.equal([0]);
  });

  it('can be instantiated', () => {
    expect(base).to.be.ok;
    expect(base.id).to.be.a('string');
    expect(hashids.decode(base.id)).to.deep.equal([1]);
    expect(base.type).to.be.oneOf(['A', 'G', 'C', 'T', 'U']);
  });

});
