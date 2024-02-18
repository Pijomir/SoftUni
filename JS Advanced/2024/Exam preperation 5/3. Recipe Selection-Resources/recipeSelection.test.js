import { expect } from "chai";
import { recipeSelection } from "./recipeSelection.js";

describe('tests for isTypeSuitable', () => {
    it('valid cases', () =>{
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians');
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        expect(recipeSelection.isTypeSuitable('Vegetables', 'Vegetarian')).to.equal('This recipe is suitable for your dietary restriction');
    });

    it('invalid cases', () =>{
        expect(() => recipeSelection.isTypeSuitable()).to.throw('Invalid input');
        expect(() => recipeSelection.isTypeSuitable(1, 'Vegetarian')).to.throw('Invalid input');
        expect(() => recipeSelection.isTypeSuitable('Meat', 1)).to.throw('Invalid input');
        expect(() => recipeSelection.isTypeSuitable(1, 1)).to.throw('Invalid input');
    });

    describe('tests for isItAffordable', () => {
        it('valid cases', () => {
            expect(recipeSelection.isItAffordable(2, 1)).to.equal("You don't have enough budget to afford this recipe");
            expect(recipeSelection.isItAffordable(1, 2)).to.equal('Recipe ingredients bought. You have 1$ left');
        });

        it('invalid cases', () => {
            expect(() => recipeSelection.isItAffordable()).to.throw('Invalid input');
            expect(() => recipeSelection.isItAffordable('1', 1)).to.throw('Invalid input');
            expect(() => recipeSelection.isItAffordable(1, '1')).to.throw('Invalid input');
            expect(() => recipeSelection.isItAffordable('1', '1')).to.throw('Invalid input');
        });
    });

    describe('test for getRecipesByCategory', () => {
        it('valid cases', () => {
            expect(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }], "Asian")).to.deep.equal(["Spicy Tofu Stir-Fry"]);
            expect(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }], "Italian")).to.deep.equal([]);
        });

        it('invalid cases', () => {
            expect(() => recipeSelection.getRecipesByCategory()).to.throw('Invalid input');
            expect(() => recipeSelection.getRecipesByCategory(1, 'Italian')).to.throw('Invalid input');
            expect(() => recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }], 1)).to.throw('Invalid input');
            expect(() => recipeSelection.getRecipesByCategory(1, 1)).to.throw('Invalid input');
        });
    });
});