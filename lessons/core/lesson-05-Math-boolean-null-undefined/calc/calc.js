/**
 * Генерує випадкове число від 0 до 100 та округлює його.
 * @type {number}
 */
const num1 = Math.round(Math.random()*100)
/**
 * Генерує випадкове число від 0 до 100 та округлює його.
 * @type {number}
 */
const num2 = Math.round(Math.random()*100)

console.log(num1,num2);

/**
 * Обчислює суму двох чисел.
 * @type {number}
 */
const sum = num1 + num2
/**
 * Обчислює різницю двох чисел.
 * @type {number}
 */
const difference = num1 - num2
/**
 * Обчислює добуток двох чисел.
 * @type {number}
 */
const product  = num1 * num2
/**
 * Обчислює частку двох чисел.
 * @type {number}
 */
const quotient = num1 / num2

console.log(sum, difference, product, quotient);