var assert = require('assert');
var creditcardWarder = require('..');

describe('Creditcards', function () {
  var validCard = creditcardWarder('4024007175430676');
  var invalidCards = {
    filledOne: creditcardWarder('1111111111111111'),
    filledLetters: creditcardWarder('AAACCCEEEDDDFFFZZ')
  };

  describe('Brands', function () {
    it('should return other when card number be invalid.', function () {
      assert.strictEqual(invalidCards.filledOne.getBrand(), 'other');
    });

    it('should return other when card number be invalid with letters.', function () {
      assert.strictEqual(invalidCards.filledLetters.getBrand(), 'other');
    });

    it('should return other when card number be empty.', function () {
      assert.strictEqual(creditcardWarder('').getBrand(), 'other');
    });

    it('should return "Visa" when passed 4024007175430676.', function () {
      assert.strictEqual('visa', validCard.getBrand());
    });

    it('should return "Mastercard" brand', function () {
      assert.strictEqual('mastercard', creditcardWarder('5141581454983717').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('2300000000000003').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('2221009999999999').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('2234009999999999').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('2321009999999999').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('2499999999999999').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('2720999999999999').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('5100000000000000').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('5255555555555555').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('5444444444444444').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('5555555555555555').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('2221005555555459').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('2222005555555459').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('2720995555555459').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('5153295555555459').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('5321655555555459').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('5547845555555459').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('5413515555555459').getBrand());
      assert.strictEqual('mastercard', creditcardWarder('5436275555555459').getBrand());
    });

    it('should not return "Mastercard" brand', function () {
      assert.notStrictEqual('mastercard', creditcardWarder('1221009999999999').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('2121009999999999').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('2211009999999999').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('2220009999999999').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('2721009999999999').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('2721999999999999').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('2730999999999999').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('2820999999999999').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('4111111111111111').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('5055555555555555').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('5600000000000000').getBrand());
      assert.notStrictEqual('mastercard', creditcardWarder('5911111111111111').getBrand());
    });

    it('should return "ELO" brand', function () {
      assert.strictEqual('elo', creditcardWarder('6363680235079446').getBrand());
      assert.strictEqual('elo', creditcardWarder('5067017087967751').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090481111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090671111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090691111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090741111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090681111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090401111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090451111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090511111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090661111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090471111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090421111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090521111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090641111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090401111111118').getBrand());
      assert.strictEqual('elo', creditcardWarder('5090481111111118').getBrand());
    });
  });

  describe('Luhn Algorithm', function () {
    it('should pass validation on luhn algorithm when passed 4024007175430676', function () {
      assert.ok(validCard.validate());
    });

    it('should fail validation on luhn algorithm when passed 1111111111111111', function () {
      assert.strictEqual(invalidCards.filledOne.validate(), false);
    });

    it('should fail validation when passed letters', function () {
      assert.strictEqual(invalidCards.filledLetters.validate(), false);
    });
  });

  describe('Rule', function () {
    it('should return rule other when card number be empty.', function () {
      var rule = creditcardWarder().getRule();
      assert.strictEqual(rule.type, 'other');
    });

    it('should return rule other when card number be empty string.', function () {
      var rule = creditcardWarder('').getRule();
      assert.strictEqual(rule.type, 'other');
    });
  });
});
