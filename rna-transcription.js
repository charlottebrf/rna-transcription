var DnaTranscriber = function () {
};

var dnaOptions = ['C', 'G', 'A', 'T'];
var dnaOptionsRegex = /^[CGAT]+$/;
var rnaOptions = ['G', 'C', 'U', 'A'];

DnaTranscriber.prototype.toRna = function (dna) {
    if (dna.length >= 1 && this.isValid(dna)) {
        var result = [];
        dna.split("").forEach(function (element) {
            result.push(rnaOptions[dnaOptions.indexOf(element)]);
        });
        return result.join("");
    } else {
        throw 'Invalid input';
    }
};

DnaTranscriber.prototype.isValid = function (dna) {
    return dna.match(dnaOptionsRegex) ? true : false;
};


module.exports = DnaTranscriber;