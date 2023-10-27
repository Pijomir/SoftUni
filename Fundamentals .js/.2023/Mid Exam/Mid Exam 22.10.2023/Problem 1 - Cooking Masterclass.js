function checkIfMoneyEnough(input) {
    let budget = input.shift();
    let students = input.shift();
    let flourPrice = input.shift();
    let eggPrice = input.shift() * 10;
    let apronPrice = input.shift();
    let flourDiscount = Math.floor(students / 5) * flourPrice;
    let finalPrice = (students * flourPrice - flourDiscount) + (students * eggPrice) + (Math.ceil(students * 1.2) * apronPrice);
    let result = budget >= finalPrice ? `Items purchased for ${finalPrice.toFixed(2)}$.` : `${(finalPrice - budget).toFixed(2)}$ more needed.`
    console.log(result);
} 

checkIfMoneyEnough([50,
    2,
    1.0,
    0.10,
    10.0]);

checkIfMoneyEnough([100,
    25,
    4.0,
    1.0,
    6.0]);

    checkIfMoneyEnough([40,
        2,
        1.0,
        0.10,
        10.0])
        
    