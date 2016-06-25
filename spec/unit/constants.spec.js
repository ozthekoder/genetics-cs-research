const constants = require('../../lib/constants');

describe('Constants', () => {
  it('should be defined', () => {
    expect(constants).to.be.ok;
  });

  it('all constants should be defined', () => {
    expect(constants).to.deep.equal({
      salt: {
        base: 'oz rulez niggaz',
        codon: 'oz is a fuckin genius yo'
      },
      codes: {
        Ala: {
          name: 'Alanine',
          codons: ['GCA', 'GCC', 'GCG', 'GCU']
        },
        Arg: {
          name: 'Arginine',
          codons: ['AGA', 'AGG', 'CGA', 'CGC', 'CGG', 'CGU']
        },
        Asn: {
          name: 'Asparagine',
          codons: ['AAC', 'AAU']
        },
        Asp: {
          name: 'Aspartic acid',
          codons: ['GAC', 'GAU']
        },
        Cys: {
          name: 'Cysteine',
          codons: ['UGC', 'UGU']
        },
        Gln: {
          name: 'Glutamine',
          codons: ['CAA', 'CAG']
        },
        Glu: {
          name: 'Glutamic acid',
          codons: ['GAA', 'GAG']
        },
        Gly: {
          name: 'Glycine',
          codons: ['GGA', 'GGC', 'GGG', 'GGU']
        },
        His: {
          name: 'Histidine',
          codons: ['CAC', 'CAU']
        },
        Ile: {
          name: 'Isoleucine',
          codons: ['AUA', 'AUC', 'AUU']
        },
        Leu: {
          name: 'Leucine',
          codons: ['CUA', 'CUC', 'CUG', 'CUU', 'UUA', 'UUG']

        },
        Lys: {
          name: 'Lysine',
          codons: ['AAA', 'AAG']
        },
        Met: {
          start: true,
          name: 'Methionine',
          codons: ['AUG']
        },
        Phe: {
          name: 'Phenylalanine',
          codons: ['UUC', 'UUU']
        },
        Pro: {
          name: 'Proline',
          codons: ['CCA', 'CCC', 'CCG', 'CCU']
        },
        Ser: {
          name: 'Serine',
          codons: ['AGC', 'AGU', 'UCA', 'UCC', 'UCG', 'UCU']
        },
        Thr: {
          name: 'Threonine',
          codons: ['ACA', 'ACC', 'ACG', 'ACU']
        },
        Trp: {
          name: 'Tryptophan',
          codons: ['UGG']
        },
        Tyr: {
          name: 'Tyrosine',
          codons: ['UAC', 'UAU']
        },
        Val: {
          name: 'Valine',
          codons: ['GUA', 'GUC', 'GUG', 'GUU']
        },
        Stp: {
          stop: true,
          name: 'Stop',
          codons: ['UGA', 'UAA', 'UAG']
        }
      }
    });
  });
});
