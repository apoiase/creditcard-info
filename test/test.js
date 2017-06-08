var assert = require('assert');
var expect = require('expect.js');

var CreditcardWarder = require('../index.js');

describe('Creditcards', function() {
    var validCard = CreditcardWarder('4024007175430676');
    var invalidCards = {
        filledOne: CreditcardWarder('1111111111111111'),
        filledLetters: CreditcardWarder('AAACCCEEEDDDFFFZZ')
    };

    describe('Brands', function() {
        it('should return visa when passed 4024007175430676', function() {
            assert.equal("visa", validCard.getBrand());
        });

        it('should return other when card number be invalid.', function() {
            expect(invalidCards.filledOne.getBrand()).to.be.equal("other");
        });

        it('should return other when card number be invalid with letters.', function() {
            expect(invalidCards.filledLetters.getBrand()).to.be.equal("other");
        });

        it('should return other when card number be empty.', function() {
            expect(CreditcardWarder('').getBrand()).to.be.equal("other");
        });
        it('should return master brand', function() {
            assert.equal("mastercard", CreditcardWarder('5141581454983717').getBrand());
            assert.equal("mastercard", CreditcardWarder('2300000000000003').getBrand());
            assert.equal("mastercard", CreditcardWarder('2221009999999999').getBrand());
            assert.equal("mastercard", CreditcardWarder('2234009999999999').getBrand());
            assert.equal("mastercard", CreditcardWarder('2321009999999999').getBrand());
            assert.equal("mastercard", CreditcardWarder('2499999999999999').getBrand());
            assert.equal("mastercard", CreditcardWarder('2720999999999999').getBrand());
            assert.equal("mastercard", CreditcardWarder('5100000000000000').getBrand());
            assert.equal("mastercard", CreditcardWarder('5255555555555555').getBrand());
            assert.equal("mastercard", CreditcardWarder('5444444444444444').getBrand());
            assert.equal("mastercard", CreditcardWarder('5555555555555555').getBrand());
        });
        it('should not return mater brand', function(){
            assert.notEqual("mastercard", CreditcardWarder('1221009999999999').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('2121009999999999').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('2211009999999999').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('2220009999999999').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('2721009999999999').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('2721999999999999').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('2730999999999999').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('2820999999999999').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('4111111111111111').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('5055555555555555').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('5600000000000000').getBrand());
            assert.notEqual("mastercard", CreditcardWarder('5911111111111111').getBrand());
        });
    });

    describe('Luhn Algorithm', function(){
        it('should pass validation on luhn algorithm when passed 4024007175430676', function(){
            expect(validCard.validate()).to.be.ok();
        });

        it('should fail validation on luhn algorithm when passed 1111111111111111', function(){
            expect(invalidCards.filledOne.validate()).not.be.ok()
        });

        it('should fail validation when passed letters', function(){
            expect(invalidCards.filledLetters.validate()).not.be.ok()
        });
    });

    describe('Rule', function() {
        it('should return rule other when card number be empty.', function() {
            var rule = CreditcardWarder().getRule();
            expect(rule.type).to.be.equal("other");
        });

        it('should return rule other when card number be empty string.', function() {
            var rule = CreditcardWarder('').getRule();
            expect(rule.type).to.be.equal("other");
        });
    });
});
