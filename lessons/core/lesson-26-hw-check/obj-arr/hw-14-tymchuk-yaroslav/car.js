/**
 * Об'єкт "Автомобіль"
 * @typedef {Object} car
 * @property {string} brand - Марка автомобіля.
 * @property {string} model - Модель автомобіля.
 * @property {number} year - Рік випуску автомобіля.
 * @property {string} color - Колір автомобіля.
 * @property {function(): void} showInfo - Метод для відображення інформації про автомобіль.
 */

const car =  {
    brand: "Renault",
    model:  "Scenic",
    year:   2022,
    color: "silver",

    showInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Колір: ${this.color}.`);
    }
}


car.showInfo();
