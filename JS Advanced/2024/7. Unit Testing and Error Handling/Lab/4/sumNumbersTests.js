import { sum } from './sumNumbers.js';
import { expect } from 'chai';

describe ('Tests', function() {
    it('works with array of numbers', () => {
        let arr = [1, 1, 1];
        expect(sum(arr)).to.equal(3);
    });

    it('returns 0 with an empty arr', () =>{
        expect(sum([])).to.equal(0);
    });
});