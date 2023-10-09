function bombNumbers(nums, commands) {
    let [bombNum, blast] = commands;
    while (nums.includes(bombNum)) {
        let startOfTheBlast = Math.max(nums.indexOf(bombNum) - blast, 0);
        nums.splice(startOfTheBlast, blast * 2 + 1);
    } 

    console.log(nums.reduce((a, b) => a + b, 0));

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);