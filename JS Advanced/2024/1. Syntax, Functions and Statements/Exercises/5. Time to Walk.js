function calculateWalkingTime(steps, lengthInMeters, speed) {
    let distance = steps * lengthInMeters / 1000;
    let breaks = Math.floor(distance / 0.5) / 60;
    let timeInSeconds = (distance / speed + breaks) * 3600;
    let hours = String(Math.floor(timeInSeconds / 3600));
    let minutes = String(Math.floor((timeInSeconds - (hours * 3600)) / 60));
    let seconds = String((timeInSeconds - (hours * 3600) - (minutes * 60)).toFixed(0));

    return `${hours.padStart(2,'0')}:${minutes.padStart(2,'0')}:${seconds.padStart(2,'0')}`;
}

console.log(calculateWalkingTime(4000, 0.60, 5));;
