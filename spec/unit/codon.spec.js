const Hashids = require('hashids');
const constants = require('../../lib/constants');
const hashids = new Hashids(constants.salt.codon);
const Base = require('../../lib/base');
const Codon = require('../../lib/codon');

describe('Codon Class', () => {
  let codon;

  beforeEach(() => {
    codon = new Codon();
  });

  it('should be defined', () => {
    expect(Codon).to.be.ok;
    expect(hashids.decode(codon.id)).to.deep.equal([0]);
  });

  it('can be instantiated', () => {
    expect(codon).to.be.ok;
    expect(codon.id).to.be.a('string');
    expect(codon.bases).to.be.an('array');
    expect(codon.bases.length).to.equal(0);
    expect(hashids.decode(codon.id)).to.deep.equal([1]);
    codon = new Codon(['foo', 'bar']);
    expect(hashids.decode(codon.id)).to.deep.equal([2]);
    expect(codon.bases).to.deep.equal(['foo', 'bar']);
  });

  it('resolves to correct aminoacid', () => {
    const bases = ['A', 'U', 'G']
    .map((b) => new Base(b));
    codon = new Codon(bases);
    expect(codon.aminoacid).to.deep.equal({
      start: true,
      name: 'Methionine',
      codons: ['AUG']
    })
  });

  describe('generateCodon method', () => {
    it('should return a new instance of Codon that has the correct aminoacid when passed a string of a triplet', () => {
      const codon = Codon.generateCodon('AAA');
      expect(codon.aminoacid).to.deep.equal({
        name: 'Lysine',
        codons: ['AAA', 'AAG']
      })
    });

    it('should return a new instance of Codon that has the correct aminoacid when passed an array of strings as a triplet', () => {
      const codon = Codon.generateCodon(['U', 'U', 'U']);
      expect(codon.aminoacid).to.deep.equal({
        name: 'Phenylalanine',
        codons: ['UUC', 'UUU']
      });
    });

    it('should return a new instance of Codon that has the correct aminoacid when passed an array of Base objects as a triplet', () => {
      const codon = Codon.generateCodon([new Base('U'), new Base('G'), new Base('U')]);
      expect(codon.aminoacid).to.deep.equal({
      name: 'Cysteine',
      codons: ['UGC', 'UGU']
    });
    });

  });

});
