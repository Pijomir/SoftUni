import { expect } from "chai";
import { findNewApartment } from "./3. findApartment.js";

describe('tests for isGoodLocation', function() {
    it('ot correct city', function() {
        expect(findNewApartment.isGoodLocation('Petrich', true)).to.equal('This location is not suitable for you.');
    });

    it('not near to transport', function() {
        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
    });

    it('requirements are met', function() {
        expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
    });

    it('invalid inputs', function() {
        expect(() => findNewApartment.isGoodLocation(1, true)).to.throw('Invalid input!');
        expect(() => findNewApartment.isGoodLocation('Varna', [])).to.throw('Invalid input!');
        expect(() => findNewApartment.isGoodLocation(1, [])).to.throw('Invalid input!');
    });
});

describe('tests for isLargeEnough', function() {
    it("doesn't throw an error", function() {
        expect(findNewApartment.isLargeEnough([50], 50)).to.equal('50');
        expect(findNewApartment.isLargeEnough([50, 40], 55)).to.equal('');
        expect(findNewApartment.isLargeEnough([50, 60], 50)).to.equal('50, 60');
    }); 

    it('throws an error', function(){
        expect(() => findNewApartment.isLargeEnough(50, 40)).to.throw('Invalid input!');
        expect(() => findNewApartment.isLargeEnough([], 50)).to.throw('Invalid input!');
        expect(() => findNewApartment.isLargeEnough([50], '50')).to.throw('Invalid input!');
        expect(() => findNewApartment.isLargeEnough(50, '50')).to.throw('Invalid input!');
    });
});

describe('tests for isItAffordable', function() {
    it("doesn't throw an error", function() {
        expect(findNewApartment.isItAffordable(1000, 999)).to.equal("You don't have enough money for this house!");
        expect(findNewApartment.isItAffordable(999, 1000)).to.equal("You can afford this home!");
    });

    it('throws an error', function() {
        expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(1, -1)).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(0, 1)).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(1, 0)).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable('1', 1)).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(1, '1')).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable('1', '1')).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(0, 0)).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(-1, -1)).to.throw('Invalid input!');
    });
});