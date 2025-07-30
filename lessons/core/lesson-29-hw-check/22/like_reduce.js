const arrayReduce = [22, 33, 11, 55, 44, 66];

let accumulator = -231;

for (let i = 0; i < arrayReduce.length; i++) {
    accumulator += arrayReduce[i]
    
}


console.log(`Original array: [${arrayReduce}]`);
console.log("Result of reduce-like method");
console.log(accumulator);
console.log("\n");

