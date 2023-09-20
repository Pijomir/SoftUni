function calculateGladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let finalPrice = Math.floor(lostFights / 2) * helmetPrice + Math.floor(lostFights / 3) * swordPrice + Math.floor(lostFights / 6) * shieldPrice + Math.floor(lostFights / 12) * armorPrice;
    console.log(`Gladiator expenses: ${finalPrice.toFixed(2)} aureus`);
}

calculateGladiatorExpenses(7, 2, 3, 4, 5);

