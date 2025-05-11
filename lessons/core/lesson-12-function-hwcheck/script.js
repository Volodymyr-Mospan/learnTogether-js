// /**
//  * Готує яєшню з вказаними параметрами.
//  * @param {number} eggsCount - Кількість яєць.
//  * @param {boolean} useOil - Використовувати олію чи ні.
//  * @param {boolean} mixEggs - Перемішувати яйця (робити омлет) чи ні.
//  * @param {string[]} ingredients - Додаткові інгредієнти (наприклад, ["сіль", "перець", "зелень"]).
//  */
// function cookEggs(eggsCount, useOil, mixEggs, ingredients) {
//     console.log("1. Поставити сковороду на плиту.");
    
//     if (useOil) {
//       console.log("2. Додати олію або вершкове масло.");
//     }
    
//     console.log(`3. Розбити ${eggsCount} яйця на сковороду.`);
    
//     if (mixEggs) {
//       console.log("4. Перемішати яйця (готуємо омлет).");
//     } else {
//       console.log("4. Готуємо з цілим жовтком.");
//     }
    
//     if (ingredients.length > 0) {
//       console.log(`5. Додаємо інгредієнти: ${ingredients.join(", ")}.`);
//     }
  
//     console.log("6. Смажимо кілька хвилин до готовності.");
//     console.log("7. Перекладаємо яєшню на тарілку. Смачного! 🍳");
//   }
  


// cookEggs(2, false, false, []);
// cookEggs(3, true, true, ["сіль", "перець"]);

// let total = 0;
// function calculateExpenses(vytrati) {
//     // let sum = 0;
//     // for (let i = 0; i < vytrati.length; i++) {
//     //     sum += vytrati[i];
//     // }
//     // return sum;

//     let total = 0;
//     // var total = 0;
//     // const total = 0;
//     for (const zabaganka of vytrati) {
//         // total += zabaganka;
//         total = total + zabaganka;
//     }
//     return total;
// }

// // console.log(total); // ReferenceError: total is not defined

// const expenses = [100, 200, 300, 400, 500]; // 1500
// const expenses = [100, 200, 300]; // 600
// const expenses = [400, 500]; // 900
// // calculateExpenses(expenses);
// const result = calculateExpenses(expenses);
// console.log(result); // 1500


// function createShopingList(items) {
//     console.log("Список покупок:");

//     items.forEach((zabaganka) => {
//         console.log(`\t* ${zabaganka.toUpperCase()}`);
        
//     });
// }

// createShopingList(["хліб", "молоко", "яйця", "масло"]);
// createShopingList(["помідори", "огірки", "цибуля", "перець"]);