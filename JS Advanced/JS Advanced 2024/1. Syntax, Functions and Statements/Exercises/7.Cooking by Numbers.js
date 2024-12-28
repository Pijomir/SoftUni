function cookingNums(num, ...commands) {
    let operations = {
        chop : x => x / 2, 
        dice : x => Math.sqrt(x),
        spice : x => x + 1,
        bake : x => x * 3,
        fillet : x => x * 0.8
    }

    num = Number(num);
    commands.forEach(a => {
        num = operations[a](num);
        console.log(num);
    });
} 

cookingNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');