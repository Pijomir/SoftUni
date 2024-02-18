import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";

describe('tests for choosingDestination', () => {
    it('not 2024', () =>{
        expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw('Invalid Year!');
    });

    it('not Ski Resort', () => {
        expect(() => planYourTrip.choosingDestination('Beach Resort', 'Winter', 2024)).to.throw('This destination is not what you are looking for.');
    });

    it('Winter season', () => {
        expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
    });

    it('not Winter season', () => {
        expect(planYourTrip.choosingDestination('Ski Resort', 'Spring', 2024)).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.');
    });
});

describe('tests for exploreOptions', () => {
    it('valid cases', () => {
        expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2)).to.equal('Skiing, Snowboarding');
        expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0)).to.equal('Snowboarding, Winter Hiking');
        expect(planYourTrip.exploreOptions(['Skiing'], 0)).to.equal('');
    });

    it('not an array', () => {
        expect(() => planYourTrip.exploreOptions('Skiing', 1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions([], 0)).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(1, 0)).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions({}, 0)).to.throw('Invalid Information!');
    });

    it('index not a number or out of arr length', () => {
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], '1')).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 7)).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], -1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], '-1')).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], '-1.1')).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], '1.1')).to.throw('Invalid Information!');
    });

    it('index not an integer', () => {
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1.1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], -1.1)).to.throw('Invalid Information!');
    });

    it('two invalid parameters', () => {
        expect(() => planYourTrip.exploreOptions("Skiing", 'abc')).to.throw('Invalid Information!');
    });

    it('others', () => {
        expect(() => planYourTrip.exploreOptions()).to.throw('Invalid Information!');
    })
});

describe('tests for estimateExpenses', () => {
    it('total cost is lesser(or equal) than 500', () => {
        expect(planYourTrip.estimateExpenses(499, 1)).to.equal('The trip is budget-friendly, estimated cost is $499.00.');
        expect(planYourTrip.estimateExpenses(500, 1)).to.equal('The trip is budget-friendly, estimated cost is $500.00.');
        expect(planYourTrip.estimateExpenses(500, 0.9)).to.equal('The trip is budget-friendly, estimated cost is $450.00.');
        expect(planYourTrip.estimateExpenses(499.99, 1)).to.equal('The trip is budget-friendly, estimated cost is $499.99.');
        expect(planYourTrip.estimateExpenses(500, 1)).to.equal('The trip is budget-friendly, estimated cost is $500.00.');
        expect(planYourTrip.estimateExpenses(499.99, 0.9)).to.equal('The trip is budget-friendly, estimated cost is $449.99.');
        expect(planYourTrip.estimateExpenses(1, 50)).to.equal('The trip is budget-friendly, estimated cost is $50.00.');
        expect(planYourTrip.estimateExpenses(1.1, 50.5)).to.equal('The trip is budget-friendly, estimated cost is $55.55.');
    });

    it('total cost is higher than 500', () => {
        expect(planYourTrip.estimateExpenses(501, 1)).to.equal('The estimated cost for the trip is $501.00, plan accordingly.');
        expect(planYourTrip.estimateExpenses(500, 1.1)).to.equal('The estimated cost for the trip is $550.00, plan accordingly.');
        expect(planYourTrip.estimateExpenses(500.99, 1)).to.equal('The estimated cost for the trip is $500.99, plan accordingly.');
        expect(planYourTrip.estimateExpenses(500.99, 1.1)).to.equal('The estimated cost for the trip is $551.09, plan accordingly.');
        expect(planYourTrip.estimateExpenses(3, 1000)).to.equal('The estimated cost for the trip is $3000.00, plan accordingly.');
        expect(planYourTrip.estimateExpenses(3.3, 1000)).to.equal('The estimated cost for the trip is $3300.00, plan accordingly.');
        expect(planYourTrip.estimateExpenses(3.3, 1000.11)).to.equal('The estimated cost for the trip is $3300.36, plan accordingly.');
    });

    it('throws an error', () => {
        expect(() => planYourTrip.estimateExpenses('1', 1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(1, '1')).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses('1', '1')).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(0, 1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(1, 0)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(-1, 1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(1, -1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(-1, -1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses('-1', -1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(0, '-1')).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses('-1', 0)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses('abc', 2)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses('abc', 'abc')).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(1.1, '1.1')).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses('1.1', 1.1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses('1.1', '1.1')).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(-1.1, '1.1')).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(1.1, -1.1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(-1.1, -1.1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(500)).to.throw('Invalid Information!');
    });
});
