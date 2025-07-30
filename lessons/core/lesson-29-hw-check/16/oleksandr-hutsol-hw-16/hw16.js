// Напишіть код, який буде представляти домашнє господарство через масив об'єктів, де кожен об'єкт містить інформацію про певний елемент дому чи пристрій.
// Створення масиву householdItems:
// Створіть масив householdItems, який буде містити об'єкти домашнього господарства.
// Створення об'єктів для домашнього господарства:
// Кожен об'єкт повинен мати наступні властивості:
// name: назва предмета (наприклад, "пральна машина").
// category: категорія (наприклад, "побутова техніка").
// price: вартість, грошова одиниця  - гривнія.
// inUse: булеве значення, що вказує, чи використовується предмет в даний момент.
// Додавання об'єктів до масиву:
// Додайте не менше 5 різних об'єктів до масиву householdItems, які представляють різні елементи домашнього господарства.
// Виведення інформації:
// Виведіть в консоль інформацію про всі предмети в масиві, а також окремо про ті, які використовуються в даний момент (inUse дорівнює true).

const householdItems = [];

const itemsToAdd = [
    {
        name: 'Coffee Machine',
        category: 'Kitchen Appliances',
        price: {value: 4000, currency: 'UAH'},
        inUse: true
    },
    {
        name: 'Multimeter',
        category: 'Measuring Equipment',
        price: {value1: 2300, currency: 'UAH'},
        inUse: false
    },
    {
        name: 'Fridge',
        category: 'Kitchen Appliances',
        price: {value1: 24000, currency: 'UAH'},
        inUse: true
    },
    {
        name: 'Vacuum Cleaner',
        category: 'Cleaning',
        price: {value1: 8000, currency: 'UAH'},
        inUse: false
    },
    {
        name: 'Laptop',
        category: 'Computing Equipment',
        price: {value1: 850, currency: 'USD'},
        inUse: true
    }
]

// adds items to the householdItems array
itemsToAdd.forEach(item => householdItems.push(item));

// outputs of all items from the householdItems array
console.log('All items:');
householdItems.forEach(item => {
    console.log(`${item.name} (${item.category}): ${item.price.value1} ${item.price.currency}`);
});

// outputs of in use items from the householdItems array
console.log('In use items:');
const itemsInUse = householdItems.filter(item => item.inUse);
itemsInUse.forEach(item => console.log(`The ${item.name} (${item.category}) is currently in use.`));