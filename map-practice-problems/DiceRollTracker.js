function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollUntilLimit(limit) {
    let results = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    let maxRolls = 0;
    let minRolls = limit;
    let maxNumber = null;
    let minNumber = null;

    while (!Object.values(results).includes(limit)) {
        let roll = rollDie();
        results[roll]++;
    }

    for (let num in results) {
        if (results[num] > maxRolls) {
            maxRolls = results[num];
            maxNumber = num;
        }
        if (results[num] < minRolls) {
            minRolls = results[num];
            minNumber = num;
        }
    }

    console.log("Final Results:", results);
    console.log("Number with max occurrences:", maxNumber, "with", maxRolls, "times");
    console.log("Number with min occurrences:", minNumber, "with", minRolls, "times");
}

rollUntilLimit(10);
