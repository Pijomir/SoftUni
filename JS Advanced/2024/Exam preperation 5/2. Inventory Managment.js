class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if (this.items.length >= this.capacity) {
            throw new Error('The inventory is already full.');
        }

        let currentItem = this.items.find(i => i.itemName === itemName);
        if (currentItem) {
            currentItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        let currentItem = this.items.find(i => i.itemName === itemName);
        if (!currentItem) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        if (quantity > currentItem.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        currentItem.quantity -= quantity;
        if (currentItem.quantity === 0) {
            this.items = this.items.filter(i => i.itemName !== itemName);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        let currentItem = this.items.find(i => i.itemName === itemName);
        if(currentItem) {
            currentItem.quantity += quantity;
        } else {
            this.items.push({itemName, quantity});
        }

        if(this.outOfStock.includes(itemName)) {
            this.outOfStock.join('').split(itemName);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }

    getInventorySummary() {
        const partOne = 'Current Inventory:\n';
        const partTwo = this.items.map(i => `${i.itemName}: ${i.quantity}`).join('\n');
        const partThree = `\nOut of Stock: ${this.outOfStock.join(', ')}`;
        return this.outOfStock.length > 0 ? partOne + partTwo + partThree : partOne + partTwo;
    }
}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
