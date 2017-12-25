var DnaTranscriber = function() {
};

var dnaOptions = ['C', 'G', 'A', 'T'];
var rnaOptions = ['G', 'C', 'U', 'A'];

DnaTranscriber.prototype.toRna = function (dna) {
    return rnaOptions[dnaOptions.indexOf(dna)];
};

module.exports = DnaTranscriber;