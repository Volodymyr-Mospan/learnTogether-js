const arrayUnshift = [22, 33, 11, 55, 44, 66];

console.log(`Original array: [${arrayUnshift}]`);
let unshiftNumber = 42;

if (arrayUnshift.length > 0) {
    for (let i = arrayUnshift.length; i > 0; i--) {
        arrayUnshift[i] = arrayUnshift[i - 1];
    }
    arrayUnshift[0] = unshiftNumber;
}

console.log("Result of unshift-like method");

console.log(arrayUnshift);
console.log(`New array length: ${arrayUnshift.length}`);
console.log("\n");
