function chooseTheatrePromotion(day, age) {
    let price = 0;
    let personByAge = '';
    if (age >= 0 && age <= 18) {
        personByAge = 'kid';
    } else if (age > 18 && age <= 64) {
        personByAge = 'adult';
    } else if (age > 64 && age <= 122) {
        personByAge = 'elder';
    }

    switch(personByAge) {
        case 'kid':
            switch(day) {
                case 'Weekday': price = 12; break;
                case 'Weekend': price = 15; break;
                case 'Holiday': price = 5; break;
            }

            break;
        case 'adult':
            switch(day) {
                case 'Weekday': price = 18; break;
                case 'Weekend': price = 20; break;
                case 'Holiday': price = 12; break;
            }

            break;
        case 'elder':
            switch(day) {
                case 'Weekday': price = 12; break;
                case 'Weekend': price = 15; break;
                case 'Holiday': price = 10; break;
            }

            break;
    }

    console.log(price === 0 ? 'Error!' : `${price}$`);
}

chooseTheatrePromotion('Holiday', -12);