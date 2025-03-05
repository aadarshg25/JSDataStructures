function findRepeatedDigitsInRange(start, end) {
    let repeatedDigitsArray = [];

    for (let i = start; i <= end; i++) {
        let strNum = i.toString();
        if (strNum.length === 2 && strNum[0] === strNum[1]) {
            repeatedDigitsArray.push(i);
        }
    }

    return repeatedDigitsArray;
}

let repeatedNumbers = findRepeatedDigitsInRange(0, 100);
console.log("Numbers with repeated digits:", repeatedNumbers);
