import { expect } from "chai";
import { onlineStore } from "./onlineStore.js";

describe('tests for isProductAvailable', () => {
    it("not invalid cases", () => {
        expect(onlineStore.isProductAvailable('ssd', 0)).to.equal(`Sorry, ssd is currently out of stock.`);
        expect(onlineStore.isProductAvailable('ssd', -1)).to.equal(`Sorry, ssd is currently out of stock.`);
        expect(onlineStore.isProductAvailable('ssd', 1)).to.equal(`Great! ssd is available for purchase.`);
    });

    it('invalid cases', () => {
        expect(() => onlineStore.isProductAvailable(['ssd'], 1)).to.throw('Invalid input');
        expect(() => onlineStore.isProductAvailable('ssd', '1')).to.throw('Invalid input');
        expect(() => onlineStore.isProductAvailable(['ssd'], '1')).to.throw('Invalid input');
    });
});

describe('tests for canAffordProduct', () => {
    it('not invalid cases', () => {
        expect(onlineStore.canAffordProduct(2, 1)).to.equal("You don't have sufficient funds to buy this product.");
        expect(onlineStore.canAffordProduct(1, 1)).to.equal('Product purchased. Your remaining balance is $0.');
        expect(onlineStore.canAffordProduct(1, 2)).to.equal('Product purchased. Your remaining balance is $1.');
    });

    it('invalid cases', () => {
        expect(() => onlineStore.canAffordProduct('1', 1)).to.throw('Invalid input');
        expect(() => onlineStore.canAffordProduct(1, '1')).to.throw('Invalid input');
        expect(() => onlineStore.canAffordProduct('1', '1')).to.throw('Invalid input');
    });
});

describe('tests for getRecommendedProducts', () => {
    it('not invalid cases', () => {
        expect(onlineStore.getRecommendedProducts([{name: 'ssd', category: 'hardware'}], 'hardware')).to.equal('Recommended products in the hardware category: ssd');
        expect(onlineStore.getRecommendedProducts([{name: 'ssd', category: 'hardware'}, {name: 'hdd', category: 'hardware'}], 'hardware')).to.equal('Recommended products in the hardware category: ssd, hdd');
        expect(onlineStore.getRecommendedProducts([{name: 'ssd', category: 'hardware'}], 'software')).to.equal('Sorry, we currently have no recommended products in the software category.');
    });

    it('invalid cases', () => {
        expect(() => onlineStore.getRecommendedProducts(1 , 'hardware')).to.throw('Invalid input');
        expect(() => onlineStore.getRecommendedProducts([{name: 'ssd', category: 'hardware'}], 1)).to.throw('Invalid input');
        expect(() => onlineStore.getRecommendedProducts('hardware', 1)).to.throw('Invalid input');
    });
});