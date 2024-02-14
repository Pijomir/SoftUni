import { expect } from "chai";
import { isOddOrEven } from "../2. isOddOrEven.js";

describe("tests for issOddOrEven function", function(){
    it('should expect undefined', function() {
        expect(isOddOrEven([])).to.equal(undefined);
        expect(isOddOrEven(1)).to.equal(undefined);
        expect(isOddOrEven({'name': 'pesho'})).to.equal(undefined);
        expect(isOddOrEven(['str1', 'str2', 'str3'])).to.equal(undefined);
    });

    it('should expect even', function() {
        expect(isOddOrEven('str1')).to.equal('even');
        expect(isOddOrEven('1234')).to.equal('even');
        expect(isOddOrEven('%*')).to.equal('even');
    });

    it('should expect odd', function() {
        expect(isOddOrEven('1')).to.equal('odd');
        expect(isOddOrEven('PaP')).to.equal('odd');
        expect(isOddOrEven('!@#')).to.equal('odd');
    });
});