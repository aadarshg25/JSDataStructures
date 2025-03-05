function generateBirthMonths() {
    let birthMonths = {};

    for (let i = 0; i < 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        if (!birthMonths[month]) {
            birthMonths[month] = [];
        }
        birthMonths[month].push(`Person${i + 1}`);
    }

    return birthMonths;
}

function printBirthMonths(birthMonths) {
    console.log("Birthdays by Month:");
    for (let month in birthMonths) {
        console.log(`Month ${month}:`, birthMonths[month]);
    }
}

const birthMonthsData = generateBirthMonths();
printBirthMonths(birthMonthsData);
