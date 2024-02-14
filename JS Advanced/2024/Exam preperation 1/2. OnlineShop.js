class OnlineShop{
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales =[];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.products.push({product, quantity});
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity){
        let currentproduct = this.products.find(p => p.product === product);
        if (!currentproduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= currentproduct.quantity) {
            return `You have enough from product ${product}.`;
        } else {
            let difference = minimalQuantity - currentproduct.quantity;
            currentproduct.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        let currentproduct = this.products.find(p => p.product === product);
        if(!currentproduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        currentproduct.quantity--;
        this.sales.push({product, quantity: 1});
        return `The ${product} has been successfully sold.`
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }

        let firstline = `You sold ${this.sales.length} products today!\n`;
        let secondLine = 'Products in the warehouse:\n';
        let thirdLine = this.products.map(p => `${p.product}-${p.quantity} more left`).join('\n');
        return firstline + secondLine + thirdLine;
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.quantityCheck('TV', 40,));
