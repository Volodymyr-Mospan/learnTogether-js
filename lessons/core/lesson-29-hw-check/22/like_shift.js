const arrayShift = [22, 33, 11, 55, 44, 66];

console.log(`Original array: [${arrayShift}]`);
let firstItem;

if (arrayShift.length > 0) {
    firstItem = arrayShift[0];
    for (let i = 0; i < arrayShift.length; i++) {
        arrayShift[i] = arrayShift[i + 1];
    }
    arrayShift.length = arrayShift.length - 1;
}

console.log("Result of shift-like method");
console.log(`The first element was ${firstItem}`);

console.log(arrayShift);
console.log("\n");
