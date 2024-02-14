class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        let currentWIne = this.wines.find(w => w.wineName === wineName);
        if (!currentWIne) {
            throw new Error(`"${wineName} is not in the cellar.`);
        }

        if (currentWIne.paid === true) {
            throw new Error(`"${wineName} has already been paid.`);
        }

        currentWIne.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        let currentWIne = this.wines.find(w => w.wineName === wineName);
        if(!currentWIne) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        if(currentWIne.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines = this.wines.filter(w => w.wineName !== wineName);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if(!wineType) {
            let firstPart = `You have space for ${this.space - this.wines.length} bottles more.\n`;
            let secondPart = `You paid ${this.bill}$ for the wine.\n`;
            let thirdPart = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName)).map(w => w = `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`).join('\n');
            return firstPart + secondPart + thirdPart
        } else {
            let result = [];
            this.wines.forEach(w => {
                if (w.wineType === wineType) {
                    result.push(w);
                }
            });
            if (result.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            return result.map(w => w = `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`).join('\n')
        }
    }
}

const selection = new WineSelection(2)
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));
