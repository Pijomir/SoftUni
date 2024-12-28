import { expect } from "chai";
import { createCalculator } from "./addSubtract.js";

describe("Suit", function() {
    it("work", function() {
        let object = createCalculator();
        object.add(5);
        expect(object.get()).to.equal(5);
    })
    it("work", function() {
        let object = createCalculator();
        object.add(5);
        object.subtract(3)
        expect(object.get()).to.equal(2);
    })
    it("work", function() {
        let object = createCalculator();
        expect(object.get()).to.equal(0);
    })
    it("work", function() {
        let object = createCalculator();
        object.add("10");
        object.subtract("4")
        expect(object.get()).to.equal(6);
    })
    it("work", function() {
        let object = createCalculator();
        object.subtract(4)
        expect(object.get()).to.equal(-4);
    })
    it("work", function() {
        let object = createCalculator();
        object.subtract("3")
        expect(object.get()).to.equal(-3);
    })
    it("work", function() {
        let object = createCalculator();
        object.add("5");
        object.subtract("3")
        expect(object.get()).to.equal(2);
        object.subtract(4);
        object.add(2);
        expect(object.get()).to.equal(0);
    })
    it("work", function() {
        let object = createCalculator();
        object.add(2.3);
        object.add("2.5")
        expect(object.get()).to.equal(4.8);
    })
    it("work", function() {
        let object = createCalculator();
        object.add(2.5);
        object.subtract("1.3")
        expect(object.get()).to.equal(1.2);
    })
})