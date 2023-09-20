function calculateVacationPrice(people, type, day) {
    let price = 0;
    switch(type) {
        case 'Students': 
            day === 'Friday' ? price = people * 8.45 : day === 'Saturday' ? price = people * 9.8 : price = people * 10.46;
            people >= 30 ? price *= 0.85 : price;
            break;
        case 'Business':
            people >= 100 ? people -= 10 : people;
            day === 'Friday' ? price = people * 10.9 : day === 'Saturday' ? price = people * 15.6 : price = people * 16;
            break;
        case 'Regular':
            day === 'Friday' ? price = people * 15 : day === 'Saturday' ? price = people * 20 : price = people * 22.5;
            people >= 10 && people <= 20 ? price *= 0.95 : price;
            break;
    }   

    console.log(`Total price: ${price.toFixed(2)}`);
}

calculateVacationPrice(30, "Students", "Sunday");