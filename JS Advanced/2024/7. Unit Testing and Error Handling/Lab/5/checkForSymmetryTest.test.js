import { expect } from "chai";
import { isSymmetric } from "./checkForSymmetry.js";

describe('Tests', function () {
    it('should return false if input is not an array', () => {
        let input = 'Not Array'
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });

    it('returns true if a symetric array', () => {
        let input = [1, 1, 1, 1];
        let result = isSymmetric(input);
        expect(result).to.equal(true);
    });

    it('returns false if not a symetric array', () => {
        let input = [1, 2, 3];
        let result = isSymmetric(input);
        expect(result).to.equal(false);
    });

    it('should return true if an empty arr', () => {
        expect(isSymmetric([])).to.equal(true);
    });

    it('should return true if one el', () => {
        expect(isSymmetric([1])).to.equal(true);
    });

    it('test1', function () {
        expect(isSymmetric(["wall", " "])).to.equal(false);
    });

    it('test2', function () {
        expect(isSymmetric(["-1", "2", "-3", "3", "-2", "1"])).to.equal(false);
    });

    it('test3', function () {
        expect(isSymmetric(["1.1", "2.2", "3.3", "3.3", "2.2", "1.1"])).to.equal(true);
    });

    it('test4', function () {
        expect(isSymmetric(["1", "2", "3", "3", "2", "1"])).to.equal(true);
    });

    it('test5', function () {
        expect(isSymmetric(["-1", "2", "-3", "-3", "2", "-1"])).to.equal(true);

    });

    it('test6', function(){
        expect(isSymmetric([50])).to.equal(true);
    });

    it('test7', function() {
        expect(isSymmetric([1, "2", 3, "3", 2, "1"])).to.equal((false));
    });
});


describe("Suit", function() {
    it("works", function() {
        expect(isSymmetric([3, 3, 3, 3])).to.equal(true);
    });
    it("works", function() {
        expect(isSymmetric([1, 2, 3])).to.equal(false);
    });
    it("works", function() {
        expect(isSymmetric("stirng")).to.equal(false);
    });
    it("works", function() {
        expect(isSymmetric([50])).to.equal(true);
    });
    it("works", function() {
        expect(isSymmetric([])).to.equal(true);
    });
    it("works", function() {
        expect(isSymmetric(["wall", " "])).to.equal(false);
    });
    it("works", function() {
        expect(isSymmetric(["1", "2", "3", "3", "2", "1"])).to.equal(true);
    });
    it("works", function() {
        expect(isSymmetric([1, "2", 3, "3", 2, "1"])).to.equal(false);
    });
    it("works", function() {
        expect(isSymmetric(["-1", "2", "-3", "3", "-2", "1"])).to.equal(false);
    });
    it("works", function() {
        expect(isSymmetric(["1.1", "2.2", "3.3", "3.3", "2.2", "1.1"])).to.equal(true);
    });
    it("works", function() {
        expect(isSymmetric(["-1", "2", "-3", "-3", "2", "-1"])).to.equal(true);
    });
})