function roundNumber(numToBeRounded, precisionOfRounding) {
    console.log(parseFloat(numToBeRounded.toFixed(precisionOfRounding > 15 ? 15 : precisionOfRounding)));
}

roundNumber(3.1415926535897932384626433832795, 2);