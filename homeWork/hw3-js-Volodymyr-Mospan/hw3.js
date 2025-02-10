// Список назв змінних:
// - batterConsistency - консистенція тіста
// - patelniaTemperature - температура пательні
// - cookingTime - час приготування
// - flipCount - кількість перевертань
// - ingredientList - список інгредієнтів
// - batterVolume - об'єм тіста
// - servingSize - розмір порції
// - toppingChoice - вибір начинки
// - remainingBatter - залишок тіста
// - patelniaOilLevel - рівень олії в пательні

// 1. Створіть файл `hw3.js`
// 2. Оголосіть в ньому вищенаведені змінні та ініціалізуйте їх значеннями різних типів даних.

const batterConsistency = "густе";
const patelniaTemperature = 200;
const cookingTime = { minutes: 1 };
const flipCount = 1;
const ingredientList = ["борошно", "молоко", "яйця", "цукор", "сіль"];
const batterVolume = { ml: 500 };
const servingSize = "2 млинці";
const toppingChoice = "варення";
const remainingBatter = { ml: 100 };
const patelniaOilLevel = { tablespoon: 1 };

console.log("консистенція тіста -", batterConsistency);
console.log("температура пательні -", patelniaTemperature);
console.log("час приготування -", cookingTime);
console.log("кількість перевертань -", flipCount);
console.log("список інгредієнтів -", ingredientList);
console.log("об'єм тіста -", batterVolume);
console.log("розмір порції -", servingSize);
console.log("вибір начинки -", toppingChoice);
console.log("залишок тіста -", remainingBatter);
console.log("рівень олії в пательні -", patelniaOilLevel);
