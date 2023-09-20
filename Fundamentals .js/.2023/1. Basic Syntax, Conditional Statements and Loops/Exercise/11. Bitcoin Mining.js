function bitcoinMining(input) {
    let btc = 0;
    let firstBtcDay = 0;
    let confirmFirstDay = 0;
    let money = 0;
    let btcIntoBgn = 11949.16;
    for (let i = 1; i <= input.length; i++) {
        let currentMinedMoney = Number(input[i - 1]) * 67.51;
        i % 3 === 0 ? money += currentMinedMoney * 0.7 : money += currentMinedMoney;
        if (money >= btcIntoBgn) {
            btc += Math.floor(money / btcIntoBgn);
            money = money % btcIntoBgn;
            confirmFirstDay++;
        }

        if (confirmFirstDay === 1) {
            firstBtcDay = i;
        }
    }

    console.log(`Bought bitcoins: ${btc}`);
    if (btc > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBtcDay}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124])