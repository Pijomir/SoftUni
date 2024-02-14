import { expect } from "chai";
import { motorcycleRider } from "./Motorcycle Rider.js";

describe('Tests for motorcycleRider.licenseRestriction', function () {
    it('returns correct output for "AM"', function () {
        expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
    });

    it('returns correct output for "A1"', function () {
        expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
    });

    it('returns correct output for "A2"', function () {
        expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
    });

    it('returns correct output for "A"', function () {
        expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
    });

    it('throws an erro if different type', function () {
        expect(() => motorcycleRider.licenseRestriction('X')).to.throw('Invalid Information!');
    });
});

describe('Tests for motorcycleRider.motorcycleShowroom', function () {
    it('returns 1 element', function () {
        expect(motorcycleRider.motorcycleShowroom(['50'], 50)).to.equal('There are 1 available motorcycles matching your criteria!');
    });

    it('returns 2 elements', function () {
        expect(motorcycleRider.motorcycleShowroom(['50', '51'], 100)).to.equal('There are 2 available motorcycles matching your criteria!');
    });

    it('returns matching elements', function () {
        expect(motorcycleRider.motorcycleShowroom(['50', '51'], 50)).to.equal('There are 1 available motorcycles matching your criteria!');
    });

    it('throws for non-array', function() {
        expect(() => motorcycleRider.motorcycleShowroom('50', 50)).to.throw('Invalid Information!');
    });

    it('throws for non-number', function() {
        expect(() => motorcycleRider.motorcycleShowroom(['50'], '50')).to.throw('Invalid Information!');
    });
});

describe('Tests for motorcycleRider.otherSpendings', function() {
    it('returns correct sum without discount', function() {
        expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');
    });

    it('returns correct sum with discount', function() {
        expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
    });

    it('throws error for no-array', function() {
        expect(() => motorcycleRider.otherSpendings('helmet', ['engine oil', 'oil filter'], false)).to.throw();
    });

    it('throws error for no-array', function() {
        expect(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], 'engine oil', false)).to.throw();
    });

    it('throws error for no-boolean', function() {
        expect(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], 2)).to.throw();
    });
});