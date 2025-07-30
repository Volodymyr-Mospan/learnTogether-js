const arrayMap = [22, 33, 11, 55, 44, 66];
const newArrayMap = [];

const minNumber = 2;
const maxNumber = 4;
const divideNumber = 11;

for (let i = 0; i < arrayMap.length; i++) {
    let randomNumber = -1 * (Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
    newArrayMap[newArrayMap.length] = arrayMap[i] / divideNumber + randomNumber;
}

console.log(`Original array: [${arrayMap}]`);
console.log("Result of map-like method");
console.log(newArrayMap);
console.log("\n");
