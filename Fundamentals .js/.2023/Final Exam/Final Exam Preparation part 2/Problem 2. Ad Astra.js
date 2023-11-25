function trackFoodInventory([input]) {
    let itemsPattern = /([#|])(?<food>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let currentItem = itemsPattern.exec(input);
    let allCalories = 0;
    let invetory = [];
    while (currentItem) {
        let { food, date, calories } = currentItem.groups;
        calories = Number(calories);
        allCalories += calories;
        invetory.push({'name': food, 'date': date, 'calories': calories});
        currentItem = itemsPattern.exec(input);
    }

    let daysWithFood = Math.floor(allCalories / 2000);
    console.log(`You have food to last you for: ${daysWithFood} days!`);
    if (invetory.length > 0) {
        invetory.forEach(product => console.log(`Item: ${product.name}, Best before: ${product.date}, Nutrition: ${product.calories}`));
    }
}

trackFoodInventory(['#Bread      black#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);