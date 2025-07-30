const arrayFilter = [22, 33, 11, 55, 44, 66];
const newArrayFilter = [];
const conditionNumber = 33;

for (let i = 0; i < arrayFilter.length; i++) {
    let testNumber = arrayFilter[i];
    if (testNumber % 2 !== 0 && testNumber < conditionNumber) {
        newArrayFilter[newArrayFilter.length] = testNumber;
    }
}


console.log(`Original array: [${arrayFilter}]`);
console.log("Result of filter-like method");
console.log(newArrayFilter);
console.log("\n");
