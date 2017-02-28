
var luhn = require("luhn");
var _ = require("lodash");


var CredircardInfo = function(number) {

    if (!number)
        throw 'Number fail';
    else
        this.number =  number;

    var self = this,
        rule;

    defaultFormat = /(\d{1,4})/g;

    this.rules = [{
        type: 'elo',
        pattern: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'hipercard',
        pattern: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        format: /\d/g,
        length: [13, 16, 19],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'aura',
        pattern: /^(50)/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'visaelectron',
        pattern: /^4(026|17500|405|508|844|91[37])/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'maestro',
        pattern: /^(5(018|0[23]|[68])|6(39|7))/,
        format: defaultFormat,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'forbrugsforeningen',
        pattern: /^600/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'dankort',
        pattern: /^5019/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'visa',
        pattern: /^4/,
        format: defaultFormat,
        length: [13, 16],
        cvcLength: [3],
        luhn: true
    }, {
        alias: 'master',
        type: 'mastercard',
        pattern: /^5[0-5]/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'amex',
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvcLength: [3, 4],
        luhn: true
    }, {
        type: 'dinersclub',
        pattern: /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
        length: [14],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'discover',
        pattern: /^6([045]|22)/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'unionpay',
        pattern: /^(62|88)/,
        format: defaultFormat,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: false
    }, {
        type: 'jcb',
        pattern: /^35/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: 'other',
        pattern: /\d/g,
        format: /^\d*$/g,
        length: [20],
        cvcLength: [3],
        luhn: false
    }];
};

CredircardInfo.prototype.getRule = function () {
    var self = this;
    return _(self.rules).find( function(rule) {
      return rule.pattern.test( self.number );
    });
};

CredircardInfo.prototype.getBrand = function () {
    var rule = this.getRule();
    return rule.type;
};


module.exports = function (number) {
    return new CredircardInfo(number);
};
