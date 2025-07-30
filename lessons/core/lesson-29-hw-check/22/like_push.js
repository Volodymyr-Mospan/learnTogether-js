const arrayPush = [22, 33, 11, 55, 44, 66];

console.log(`Original array: [${arrayPush}]`);

let pushNumber = 42;

arrayPush[arrayPush.length] = pushNumber;
console.log("Result of push-like method");
console.log(arrayPush);
console.log(`New array length: ${arrayPush.length}`);

console.log("\n");
