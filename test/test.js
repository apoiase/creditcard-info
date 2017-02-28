var assert = require('assert');
var expect = require('expect.js');

var CredircardInfo = require('../index.js');

describe('Creditcards', function() {
    var validCard = CredircardInfo('4024007175430676');
    var invalidCards = {
        filledOne: CredircardInfo('1111111111111111'),
        filledLetters: CredircardInfo('AAACCCEEEDDDFFFZZ')
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
});
