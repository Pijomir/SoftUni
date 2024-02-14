import { expect } from "chai";
import { petAdoptionAgency } from "./petAdoptionAgency.js";

describe('tests for isPetAvailable', function() {
    it("doesn't throw an error", function() {
        expect(petAdoptionAgency.isPetAvailable('cat', -1, false)).to.equal(`Sorry, there are no cat(s) available for adoption at the agency.`);
        expect(petAdoptionAgency.isPetAvailable('cat', 0, false)).to.equal(`Sorry, there are no cat(s) available for adoption at the agency.`);
        expect(petAdoptionAgency.isPetAvailable('cat', 1, true)).to.equal(`Great! We have 1 vaccinated cat(s) available for adoption at the agency.`);
        expect(petAdoptionAgency.isPetAvailable('cat', 1, false)).to.equal(`Great! We have 1 cat(s) available for adoption, but they need vaccination.`);
    });

    it('throws an error', function() {
        expect(() => petAdoptionAgency.isPetAvailable([], 1, true)).to.throw();
        expect(() => petAdoptionAgency.isPetAvailable(cat, '1', true)).to.throw();
        expect(() => petAdoptionAgency.isPetAvailable(cat, 1, 2)).to.throw();
        expect(() => petAdoptionAgency.isPetAvailable([], '1', true)).to.throw();
        expect(() => petAdoptionAgency.isPetAvailable([], 1, 2)).to.throw();
        expect(() => petAdoptionAgency.isPetAvailable(cat, '1', 2)).to.throw();
        expect(() => petAdoptionAgency.isPetAvailable(1, '2', 3)).to.throw();
    });
});

describe('tests for getRecommendedPets', function() {
    it("doesn't throw an error", function() {
        expect(petAdoptionAgency.getRecommendedPets([{'name': 'Kitty', 'traits': 'black'}], 'black')).to.equal(`Recommended pets with the desired traits (black): Kitty`);
        expect(petAdoptionAgency.getRecommendedPets([{'name': 'Kitty', 'traits': 'red'}, {'name': 'Pussy', 'traits': 'red'}, {'name': 'Blacky', 'traits': 'black'}], 'red')).to.equal(`Recommended pets with the desired traits (red): Kitty, Pussy`);
        expect(petAdoptionAgency.getRecommendedPets([{'name': 'Kitty', 'traits': 'red'}, {'name': 'Pussy', 'traits': 'red'}, {'name': 'Blacky', 'traits': 'red'}], 'black')).to.equal(`Sorry, we currently have no recommended pets with the desired traits: black.`);
    });

    it('throws an error', function() {
        expect(() => petAdoptionAgency.getRecommendedPets('Kitty', 'red')).to.throw();
        expect(() => petAdoptionAgency.getRecommendedPets([{'name': 'Kitty', 'traits': 'black'}], ['red'])).to.throw();
        expect(() => petAdoptionAgency.getRecommendedPets('Kitty', ['red'])).to.throw();
    });
});

describe('tests for adoptPet', () => {
    it("doesn't throw an erro", () => {
        expect(petAdoptionAgency.adoptPet('cat', 'John')).to.equal(`Congratulations, John! You have adopted cat from the agency. Enjoy your time with your new furry friend!`);
    });

    it('throws an error', () => {
        expect(() => petAdoptionAgency.adoptPet({'name': 'Kitty', 'traits': 'black'}, 'John')).to.throw();
        expect(() => petAdoptionAgency.adoptPet('cat', ['John'])).to.throw();
        expect(() => petAdoptionAgency.adoptPet({'name': 'Kitty', 'traits': 'black'}, ['John'])).to.throw();
    });
});