import { mathEnforcer } from "../4. mathEnforcer.js";
import { expect } from "chai";

describe('tests for mathEnforcer.addFive function', function () {
    it('should return undefined', function () {
        expect(mathEnforcer.addFive()).to.equal(undefined);
        expect(mathEnforcer.addFive([])).to.equal(undefined);
        expect(mathEnforcer.addFive('str')).to.equal(undefined);
        expect(mathEnforcer.addFive('1')).to.equal(undefined);
        expect(mathEnforcer.addFive('1.5')).to.equal(undefined);
        expect(mathEnforcer.addFive('-1')).to.equal(undefined);
        expect(mathEnforcer.addFive('-1.5')).to.equal(undefined);
    });

    it('should return correct result', function () {
        expect(mathEnforcer.addFive(-1)).to.equal(4);
        expect(mathEnforcer.addFive(-1.5)).to.equal(3.5);
        expect(mathEnforcer.addFive(0)).to.equal(5);
        expect(mathEnforcer.addFive(1)).to.equal(6);
        expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
    });
});

describe('tests for mathEnforcer.subtractTen function', function () {
    it('should return undefined', function () {
        expect(mathEnforcer.subtractTen()).to.equal(undefined);
        expect(mathEnforcer.subtractTen([])).to.equal(undefined);
        expect(mathEnforcer.subtractTen('str')).to.equal(undefined);
        expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
        expect(mathEnforcer.subtractTen('1.5')).to.equal(undefined);
        expect(mathEnforcer.subtractTen('-1')).to.equal(undefined);
        expect(mathEnforcer.subtractTen('-1.5')).to.equal(undefined);
    });

    it('should return correct result', function () {
        expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        expect(mathEnforcer.subtractTen(-1.5)).to.equal(-11.5);
        expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        expect(mathEnforcer.subtractTen(1.5)).to.equal(-8.5);
    });
});

describe('tets for mathEnforcer.sum function', function () {
    it(`should return undefined`, function () {
        expect(mathEnforcer.sum()).to.equal(undefined);
        expect(mathEnforcer.sum([], 0)).to.equal(undefined);
        expect(mathEnforcer.sum('str', 1)).to.equal(undefined);
        expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
        expect(mathEnforcer.sum('1.5', 1.5)).to.equal(undefined);
        expect(mathEnforcer.sum('-1', -1)).to.equal(undefined);
        expect(mathEnforcer.sum('-1.5', -1.5)).to.equal(undefined);
        expect(mathEnforcer.sum(0, [])).to.equal(undefined);
        expect(mathEnforcer.sum(1, 'str')).to.equal(undefined);
        expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
        expect(mathEnforcer.sum(1.5, '1.5')).to.equal(undefined);
        expect(mathEnforcer.sum(-1, '-1')).to.equal(undefined);
        expect(mathEnforcer.sum(-1.5, '-1.5')).to.equal(undefined);
        expect(mathEnforcer.sum([], [])).to.equal(undefined);
        expect(mathEnforcer.sum('str1', 'str2')).to.equal(undefined);
        expect(mathEnforcer.sum('1', '1')).to.equal(undefined);
        expect(mathEnforcer.sum('1.5', '1.5')).to.equal(undefined);
        expect(mathEnforcer.sum('-1', '-1')).to.equal(undefined);
        expect(mathEnforcer.sum('-1.5', '-1.5')).to.equal(undefined);
    });

    it('should return correct result', function () {
        expect(mathEnforcer.sum(-1, 1)).to.equal(0);
        expect(mathEnforcer.sum(-1.5, 1.5)).to.equal(0);
        expect(mathEnforcer.sum(0, 1)).to.equal(1);
        expect(mathEnforcer.sum(1, -1)).to.equal(0);
        expect(mathEnforcer.sum(1.5, -1.5)).to.equal(0);
        expect(mathEnforcer.sum(1, -1)).to.equal(0);
        expect(mathEnforcer.sum(1.5, -1.5)).to.equal(0);
        expect(mathEnforcer.sum(1, 0)).to.equal(1);
        expect(mathEnforcer.sum(-1, 1)).to.equal(0);
        expect(mathEnforcer.sum(-1.5, 1.5)).to.equal(0);
    });
});