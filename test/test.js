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
