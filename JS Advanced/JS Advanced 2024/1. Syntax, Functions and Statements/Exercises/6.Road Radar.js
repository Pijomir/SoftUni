function radar(speed, area) {
    let speedZone = speedAreas(area);
    let overSpeed = speed - speedZone;
    let typeOfOverSpeed = typeOfSpeeding(overSpeed);

    if (overSpeed <= 0) {
        return `Driving ${speed} km/h in a ${speedZone} zone`;
    } else {
        return `The speed is ${overSpeed} km/h faster than the allowed speed of ${speedZone} - ${typeOfOverSpeed}`;
    }

    function speedAreas(area) {
        switch(area) {
            case 'residential': return 20;
            case 'city': return 50;
            case 'interstate': return 90;
            case 'motorway': return 130;
        }
    }

    function typeOfSpeeding(overSpeed) {
        if (overSpeed > 40) {
            return 'reckless driving';
        } else if (overSpeed > 20) {
            return 'excessive speeding';
        } else {
            return 'speeding';
        }
    }
}

console.log(radar(120, 'interstate'))