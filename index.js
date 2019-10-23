var luhn = require('luhn');
var find = require('lodash.find');

var CredircardWarder = function (number) {
  this.number = number;
  this.rules = [
    {
      type: 'elo',
      pattern: /^(50(67(1[589]|2[012456789]|3[01234569]|4[123567]|53|7[4568])|9(0(0[0137]|2[0-2]|3[59]|4[012578]|5[1235789]|6[013456789]|7[0134789]|8[047]|9[123489])|1(0[0456789]|46)|220|407))|6(27780|36368|5(0(0(3[12356789]|4[0-9]|5[01789]|6[0-9]|7[0-6])|4(0[6-9]|1[0-9]|2[0-9]|3[0-9]|8[5-9]|9[0-9])|5(0[012346789]|1[0-9]|2[0-9]|3[0-8]|5[2-9]|6[0-9]|7[0-9]|8[0-9]|9[0-8])|72[0-7]|9(0[1-9]|1[0-9]|2[0128]|3[89]|4[6-9]|5[0-9]|6[0-9]|7[0-8]))|1(6(5[2-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])|70[0-4])|50(0[0-9]|1[0-9]|2[1-9]|3[0-9]|4[0-9]|5[0-7])))|65(0(0(4[89]|5[01789]|6[013456789]|7[0-6])|4(1[2-9]|2[0-9]|3[01238])|5(3[1-8]|5[2-9]|6[0-9]|7[0-6]|8[18]|9[4-8])|720|9(5[01236789]|6[0129]|7[02345678]))|1(6(62|7[0-4]|8[0-9]|9[0-9])|70[0-4])|50(05|1[189]|2[1-9]|3[0-9]|4[0-9]|5[0345])))/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'hipercard',
      pattern: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
      format: /\d/g,
      length: [13, 16, 19],
      cvcLength: [3]
    }, {
      type: 'aura',
      pattern: /^(50)/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'visaelectron',
      pattern: /^4(026|17500|405|508|844|91[37])/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'maestro',
      pattern: /^(5(018|0[23]|[68])|6(39|7))/,
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      cvcLength: [3]
    }, {
      type: 'forbrugsforeningen',
      pattern: /^600/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'dankort',
      pattern: /^5019/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'visa',
      pattern: /^4/,
      length: [13, 16],
      cvcLength: [3]
    }, {
      alias: 'master',
      type: 'mastercard',
      pattern: /(?:(?:5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12})/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'amex',
      pattern: /^3[47]/,
      length: [15],
      cvcLength: [3, 4]
    }, {
      type: 'dinersclub',
      pattern: /^(?:3(?:0[0-5]|[68]\d)\d{11})$/,
      length: [14],
      cvcLength: [3]
    }, {
      type: 'discover',
      pattern: /^6([045]|22)/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'unionpay',
      pattern: /^(62|88)/,
      length: [16, 17, 18, 19],
      cvcLength: [3]
    }, {
      type: 'jcb',
      pattern: /^35/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'other',
      pattern: /\d/g,
      length: [20],
      cvcLength: [3]
    }
  ];
};

CredircardWarder.prototype.getRule = function () {
  var self = this;
  var other = find(self.rules, {type: 'other'});
  var rule = find(self.rules, function (rule) {
    return rule.pattern.test(self.number);
  });

  return rule ? rule : other;
};

CredircardWarder.prototype.getBrand = function () {
  return this.getRule().type;
};

CredircardWarder.prototype.validate = function () {
  return luhn.validate(this.number);
};

module.exports = function (number) {
  return new CredircardWarder(number);
};
