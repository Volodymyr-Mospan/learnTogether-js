// const user0 = {
//     name: 'John',
//     age: 30,

// };
// const userX = {
//     name: 'Alice',
//     age: 34,
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name}`);

//     },
// };


// function User(name, age) {  
//     this.name = name;
//     this.age = age;
// }

// const testConstructor = new Object(); // Object constructor

// const user1 = new User('John', 30);
// console.log(user1); // User { name: 'John', age: 30 }

// console.log(User.prototype);
// User.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}`);
// }
// user1.sayHello()

// const test = new Array('Lion');

// function animal(name) {
//     this.name = name;  
// }
// const animal1 = new animal('Lion');
// console.log(animal1); // animal { name: 'Lion' }

// function Animal(name, age) {
//     this.name = name;
//     this.age = age
// }
// // Animal('Lion'); // undefined
// // console.log(Animal);

// // animal1.name = 'Lion';
// // const animal1 = new Animal('Lion');
// // const animal2 = new Animal('Tiger');
// // console.log(animal1); // Animal { name: 'Lion' }
// // console.log(animal2); // Animal { name: 'Tiger' }

// Animal.prototype.makeSound = function () {
//     // console.log('Звук тваринки');
//     console.log(`${this.name} волає`);
// }
// // console.log(Animal.prototype); // Animal { makeSound: [Function] }

// function Dog(name,age) {
//     Animal.call(this, name,age); // Call the parent constructor with the current context
// }
// // const dog1 = new Dog('Buddy', 4);
// // console.log(dog1); // Dog { name: 'Buddy' }

// Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
// Dog.prototype.constructor = Dog; // Set the constructor back

// const dog1 = new Dog('Buddy');
// dog1.makeSound(); // Звук тваринки


// class ModernUser {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// const user1 = new ModernUser('John', 30);
// console.log(user1); // ModernUser { name: 'John', age: 30 }
// const user2 = new ModernUser('Alice', 34);
// console.log(user2); // ModernUser { name: 'Alice', age: 34 }
// user1.sayHello(); // Hello, my name is John
// user2.sayHello(); // Hello, my name is Alice


// class ModernAnimal{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     makeSound() {
//         console.log(`${this.name} волає`);
//     }
// }

// class ModernDog extends ModernAnimal {
//     // constructor(name, age, passport) {
//     //     super(name, age); // Call the parent constructor
//     //     this.passport = passport; // Add the passport property
//     // }
//     constructor(name,age, passport) {
//         super(name); // Call the parent constructor
//         this.passport = passport; // Add the passport property
//     }
//     // bark() {
//     //     console.log(`${this.name} гавкає ${this.age} років`);
//     // }
//     bark() {
//         console.log(`${this.name} гавкає `);
//     }
// }


// const dog1 = new ModernDog('Buddy', 4, true);
// const dog2 = new ModernDog('Max', false);
// console.log(dog1); // ModernDog { name: 'Buddy', age: 4, passport: true }
// console.log(dog2); // ModernDog { name: 'Max', age: 5, passport: false }

// dog1.makeSound(); // Buddy волає
// dog2.makeSound(); // Max волає  
// dog1.bark(); // Buddy гавкає 4 років




// class Ingredient {
//     constructor(name, amount, units) {
//         this.name = name;
//         this.amount = amount;
//         this.units = units;
//         this.prepared = false;
//     }
//     prepare() {
//         this.prepared = true;
//         console.log(`Підготовлено ${this.amount} ${this.units}  ${this.name}`);
//     }
// }

// class Recipe {
//     constructor(name, difficulty) {
//         this.name = name;
//         this.difficulty = difficulty;
//         this.ingredients = [];
//         this.steps = [];
//         this.isCooked = false;
//         this.cookingTime = 0;
//     }

//     addIngredient(name, amount, units) {
//         const ingredient = new Ingredient(name, amount, units);
//         this.ingredients.push(ingredient);
//     }
//     addStep(description, time) {
//         this.steps.push({ description, time });
//         this.cookingTime += time;
//     }
//     prepare() {
//         console.log(`\n Приготування ${this.name} розпочато`);

//         this.ingredients.forEach(ingredient => ingredient.prepare());
//     }
//     cook() {
//         if (this.ingredients.length === 0) {
//             console.log('Спочатку додайте інгредієнти!');
//             return;
//         }
//         this.prepare();
//         console.log('\n Приготування страви...');
//         this.steps.forEach((step, index) => {
//             console.log(`Крок ${index + 1}: ${step.description} (${step.time} хвилин)`);
//         })
//         this.isCooked = true;
//         console.log(`\n Загальний час приготування: ${this.cookingTime} хвилин`);
//         console.log(`\n Приготування ${this.name} завершено!`);

//     }
// }

// class RecipeFactory {
//     static createBorsch() {
//         const borsch = new Recipe('Борщ', 4);
//         borsch.addIngredient('Буряк', 2, 'шт');
//         borsch.addIngredient('Картопля', 3, 'шт');
//         borsch.addIngredient('Морква', 1, 'шт');
//         borsch.addIngredient('Цибуля', 1, 'шт');
//         borsch.addIngredient('Капуста', 200, 'г');
//         borsch.addIngredient('М\'ясо', 300, 'г');

//         borsch.addStep('Підготувати овочі', 10);
//         borsch.addStep('Зварити бульйон', 20);
//         borsch.addStep('Додати овочі до бульйону', 15);

//         return borsch;
//     }
//     static nuclearBomb() {
//         const nuclearBomb = new Recipe('Ядерна бомба', 10);
//         nuclearBomb.addIngredient('Уран', 100, 'кг');
//         nuclearBomb.addIngredient('Плутоній', 50, 'кг');
//         nuclearBomb.addIngredient('Тритій', 10, 'кг');

//         nuclearBomb.addStep('Зібрати компоненти', 60);
//         nuclearBomb.addStep('Зарядити бомбу', 120);
//         nuclearBomb.addStep('Вибухнути', 0);

//         return nuclearBomb;
//     }
// }

// const borsch = RecipeFactory.createBorsch();
// console.log(borsch); // Recipe { name: 'Борщ', difficulty: 4, ingredients: [ ... ], steps: [ ... ], isCooked: false, cookingTime: 0 }

// borsch.cook(); // Приготування Борщ розпочато



console.log('\n--- Автомобільне виробництво ---');

// Клас двигуна - відповідає за всю логіку роботи двигуна
class Engine {
    constructor(power, type) {
        this.power = power;        // Потужність двигуна в к.с.
        this.type = type;          // Тип двигуна (бензин/дизель/гібрид)
        this.isRunning = false;    // Стан двигуна (увімкнений/вимкнений)
    }

    start() {
        this.isRunning = true;
        console.log(`Двигун ${this.type} (${this.power} к.с.) запущено`);
    }

    stop() {
        this.isRunning = false;
        console.log('Двигун вимкнено');
    }
}

// Клас автомобіля - основний клас, що використовує двигун через композицію
class Car {
    constructor(model, year, enginePower, engineType) {
        this.model = model;
        this.year = year;
        // Створюємо екземпляр двигуна для кожного авто (композиція)
        this.engine = new Engine(enginePower, engineType);
        this.speed = 0;            // Поточна швидкість
        this.fuelLevel = 100;      // Рівень пального у відсотках
    }

    startEngine() {
        this.engine.start();
    }

    // Метод для прискорення з перевіркою стану двигуна
    accelerate(speed) {
        if (!this.engine.isRunning) {
            console.log('Помилка: Спочатку запустіть двигун!');
            return;
        }
        this.speed += speed;
        // Зменшуємо пальне залежно від швидкості
        this.fuelLevel -= (speed / 10);
        console.log(`${this.model} набирає швидкість ${this.speed} км/год`);
    }

    stop() {
        this.speed = 0;
        this.engine.stop();
        console.log(`${this.model} повністю зупинено`);
    }

    getFuelLevel() {
        return `Рівень пального: ${this.fuelLevel.toFixed(1)}%`;
    }
}

// Фабричний клас - створює нові автомобілі з заданими характеристиками
class CarFactory {
    static createCar(model, specifications) {
        const { year, enginePower, engineType } = specifications;
        return new Car(model, year, enginePower, engineType);
    }
}

// Демонстрація роботи системи
const bmw = CarFactory.createCar('BMW M5', {
    year: 2023,
    enginePower: 625,
    engineType: 'V8 Biturbo'
});

// Тестування всіх можливостей
console.log('\nТест автомобіля:');
bmw.startEngine();
bmw.accelerate(50);           // Прискорюємось до 50 км/год
console.log(bmw.getFuelLevel());
bmw.accelerate(100);          // Збільшуємо до 150 км/год
console.log(bmw.getFuelLevel());
bmw.stop();                   // Повна зупинка