
var luhn = require("luhn");
var _ = require("lodash");


var CredircardInfo = function(number) {
    this.number = number;

    this.rules = [
        {
            type: 'elo',
            pattern: /^(((40117[89])|(431274)|(438935)|(451416)|(457393)|(45763[12])|(504175)|(627780)|(636297)|(636368)|(65500[0-3])|(65165[2-4])|(65048[5-8])|(650489|65049[0-4])|(506699|5067[0-6][0-9]|50677[0-8])|(509[0-8][0-9]{2}|5099[0-8][0-9]|50999[0-9])|(65003[1-3])|(65003[5-9]|65004[0-9]|65005[01])|(65040[5-9]|6504[1-3][0-9])|(65048[5-9]|65049[0-9]|6505[0-2][0-9]|65053[0-8])|(65054[1-9]|6505[5-8][0-9]|65059[0-8])|(65070[0-9]|65071[0-8])|(65072[0-7])|(65090[1-9]|65091[0-9]|650920)|(65165[2-9]|6516[67][0-9])|(65500[0-9]|65501[0-9])|(65502[1-9]|6550[34][0-9]|65505[0-8]))\d{0,16})$/,
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
            pattern: /^5[0-5]/,
            length: [16],
            cvcLength: [3]
        }, {
            type: 'amex',
            pattern: /^3[47]/,
            length: [15],
            cvcLength: [3, 4]
        }, {
            type: 'dinersclub',
            pattern: /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/,
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

CredircardInfo.prototype.getRule = function () {
    var self = this;
    return _(self.rules).find( function(rule) {
      return rule.pattern.test( self.number );
    });
};

CredircardInfo.prototype.getBrand = function () {
    var rule = this.getRule();
    
    if (rule) {
        return rule.type;
    } else {
        return 'other';
    }
};

CredircardInfo.prototype.validate = function () {
    return luhn.validate(this.number);
};


module.exports = function (number) {
    return new CredircardInfo(number);
};
