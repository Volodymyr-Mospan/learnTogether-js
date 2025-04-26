//* ЗАВДАННЯ

/* 
Список назв змінних для завдання:
- batterConsistency - консистенція тіста
- patelniaTemperature - температура пательні
- cookingTime - час приготування
- flipCount - кількість перевертань
- ingredientList - список інгредієнтів
- batterVolume - об'єм тіста
- servingSize - розмір порції
- toppingChoice - вибір начинки
- remainingBatter - залишок тіста
- patelniaOilLevel - рівень олії в пательні
*/

// ============

const unitOfMeasurement = ['liter', 'ml', 'degree', 'hours', 'gram', 'milligram', 'times']; 

let batterConsistency = 'liquid';
console.log(batterConsistency);

let patelniaTemperature = 75;
console.log(patelniaTemperature + ' ' + unitOfMeasurement[2]);

const cookingTime = 2;
console.log(cookingTime + ' ' + unitOfMeasurement[3]);

const flipCount = 2;
console.log(flipCount + ' ' + unitOfMeasurement[6]);

const ingredientList = ['water', '2 eggs', 'milk 500'];
console.log(ingredientList);

const batterVolume = 500;
console.log(batterVolume + ' ' + unitOfMeasurement[1]);

const servingSize = 'middle serving';
console.log(servingSize);

let toppingChoice = ['srawberry', 'raspberry', 'banana', 'kivi', 'orange', 'tangerine'];
console.log(toppingChoice);

let remainingBatter = 10;
console.log(remainingBatter + ' ' + unitOfMeasurement[0]);

let patelniaOilLevel = 'low';
console.log(patelniaOilLevel);
