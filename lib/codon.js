const Hashids = require('hashids');
const constants = require('./constants');
const Base = require('./base');
const hashids = new Hashids(constants.salt.codon);

class Codon {

  constructor(bases=[], id=hashids.encode(Codon.COUNT++)) {
    this.id = id;
    this.bases = bases
  }

  get code() {
     return this.bases
    .map((b) => b.type)
    .join('');
  }
  get aminoacid() {
    const { codes } = constants;
    const found = Object
    .keys(codes)
    .find((c) => codes[c].codons.includes(this.code))
    return codes[found];
  }

  static generateCodon(triplet) {
    let i=0;
    const bases = [];
    for(i=0; i< triplet.length; i++) {
      if(triplet[i].type) {
        bases.push(triplet[i]);
      } else {
        bases.push(new Base(triplet[i]));
      }
    }
    return new Codon(bases);
  }
};

Codon.COUNT = 0;
module.exports = Codon;
