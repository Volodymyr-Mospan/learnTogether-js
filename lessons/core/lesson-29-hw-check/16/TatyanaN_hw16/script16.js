console.log('hw16');
console.log('1. Створюємо пустий масив');

const householdItems = new Array(5)
console.log(householdItems);
//   householdItems[0] = vacuumСleaner;

console.log("\n 2.Створюємо об'єкти для масива");

const vacuumСleaner = new Object({})
vacuumСleaner.name = 'Пилосос';
vacuumСleaner.category = 'побутова техніка';
vacuumСleaner.priceUAH = 23000;
vacuumСleaner.inUse = true;
console.log(vacuumСleaner);

const electricKettle = {};
console.log(electricKettle);
electricKettle.name = 'Електрочайник';
electricKettle.category = 'побутовиий прилад';
electricKettle.priceUAH = 2800;
electricKettle.inUse = true;
console.log(electricKettle);

const coffeeMaker = {};
console.log(coffeeMaker);
coffeeMaker.name = 'Кавоварка';
coffeeMaker.category = 'побутовиий прилад';
coffeeMaker.priceUAH = 6240;
coffeeMaker.inUse = false;
coffeeMaker.takeCoffee = function () {
    if (this.inUse === true) {
        console.log('Is making...')
    }else {
        console.log('Take your coffee')
    }
 
};
console.log(coffeeMaker);
console.log(coffeeMaker.takeCoffee());

const dishwasher = {}
console.log(dishwasher);
dishwasher.name = 'Посудомийна машина';
dishwasher.category = 'побутова техніка';
dishwasher.priceUAH = 13900;
dishwasher.inUse = false;
console.log(dishwasher);

const sink = {}
console.log(sink);
sink.name = 'Раковина';
sink.category = 'сантехніка';
sink.priceUAH = 3595;
sink.inUse = true;
console.log(sink);

const name = 'Шафа';
const category = 'меблі';
const priceUAH = 12000;
const inUse = true;
const closet = {
    name,
    category,
    priceUAH,
    inUse,
    doors() {
        console.log(`Close your ${this.name}!`);

    }
};
console.log(closet);
console.log(closet.doors());

console.log("3.Додаємо створені обє`кти в наш пустий масив");

householdItems[0] = vacuumСleaner;
householdItems[1] = electricKettle;
householdItems[2] = coffeeMaker;
householdItems[3] = closet;
householdItems[4] = dishwasher;
householdItems[5] = sink;
console.log(householdItems);
console.log(householdItems[3]);

console.log('4.Виводимо інформацію про предмети:');
console.log('1. За допомогою цикла for');

for (let i = 0; i < householdItems.length; i++) {
    console.log(householdItems[i].name);
}
console.log('2. За допомогою цикла for...of');
for (const item of householdItems) {
    console.log(`Назва ${item.name}, Ціна ${item.priceUAH}грн.`
    );
};
console.log('3. За допомогою forEach');
householdItems.forEach(function (element) {
    console.log(`${element.name} відноситься до категорії ${element.category}.`);
})

console.log('4. За допомогою стрілкової функції');
householdItems.forEach(element => {
    if (element.inUse === true) {
        console.log(`${element.name} - is working`);
        // debugger
        // } else if (closet.inUse === true){
        //     console.log(closet.doors());

        // console.log(`${element.name} - not in use now.`);
    }
});










































