import { expect } from "chai";
import { lookupChar } from "../3. charLookUp.js";

describe('test for lookupChar function', function() {
    it('should expect undefined', function() {
        expect(lookupChar(1, 2)).to.equal(undefined);
        expect(lookupChar([], 1)).to.equal(undefined);
        expect(lookupChar('str1', 'str2')).to.equal(undefined);
        expect(lookupChar('str1', 1.1)).to.equal(undefined);
    });

    it ('should return "Incorrect index"', function() {
        expect(lookupChar('str1', -1)).to.equal("Incorrect index");
        expect(lookupChar('str2', 4)).to.equal("Incorrect index");
        expect(lookupChar('str3', 5)).to.equal("Incorrect index");
    });

    it('should return a correct result', function() {
        expect(lookupChar('str', 1)).to.equal('t');
    });
});