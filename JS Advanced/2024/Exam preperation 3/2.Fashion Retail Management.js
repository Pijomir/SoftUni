class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        let currentProduct = this.productStock.find(p => p.productName === productName && p.size === size);
        if (!currentProduct) {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        } else {
            currentProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${currentProduct.productName} size ${currentProduct.size}`;
        }
    }

    sendProduct(productName, size) {
        let currentProductIndex = this.productStock.findIndex(p => p.productName === productName && p.size === size);
        if (currentProductIndex === -1) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            this.productStock.splice(currentProductIndex, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }

    findProductsBySize(size) {
        let allItemsOfCurrentSize = this.productStock.filter(p => p.size === size);
        if (allItemsOfCurrentSize.length === 0) {
            return `There are no products available in that size`;
        } else {
            return allItemsOfCurrentSize.map(item => `${item.productName}-${item.quantity} pieces`).join(', ');
        }
    }

    listProducts() {
        if (this.productStock.length === 0) {
            return `${this.storehouse} storehouse is empty`;
        }

        let firstPart = `${this.storehouse} storehouse in ${this.location} available products:\n`;
        let secondPart = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName)).map(p => `${p.productName}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$`).join('\n');
        
        return firstPart + secondPart;
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.findProductsBySize("M"));
console.log(storeHouse.findProductsBySize("XL"));

