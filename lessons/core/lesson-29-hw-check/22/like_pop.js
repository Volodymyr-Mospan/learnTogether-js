const arrayPop = [22, 33, 11, 55, 44, 66];

console.log(`Original array: [${arrayPop}]`);

if (arrayPop.length > 0) {
    let lastItem = arrayPop[arrayPop.length - 1];
    arrayPop.length = arrayPop.length - 1;
    console.log("Result of pop-like method");
    console.log(`The last element was ${lastItem}`);

    console.log(arrayPop);
    console.log("\n");
}
