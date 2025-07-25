const x = Math.floor(Math.random() * 10);
const y = Math.floor(Math.random() * 10);

// export function add(a, b) {
//   return a + b;
// }
// export function subtract(a, b) {
//   return a - b;
// }
// export default function multiply(a, b) {
//   return a * b;
// }
function add(a = x, b = y) {
    return a + b;
}
function subtract(a = x, b = y) {
    return a - b;
}
function multiply(a = x, b = y) {
    return a * b;
}
export { add, subtract };
export default multiply;