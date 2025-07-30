//* ЗАВДАННЯ

/* 
Напишіть код, який буде представляти домашнє господарство через масив об'єктів, де кожен об'єкт містить інформацію про певний елемент дому чи пристрій.

Створення масиву householdItems:
Створіть масив householdItems, який буде містити об'єкти домашнього господарства.

Створення об'єктів для домашнього господарства:
Кожен об'єкт повинен мати наступні властивості:
name: назва предмета (наприклад, "пральна машина").
category: категорія (наприклад, "побутова техніка").
price: вартість, грошова одиниця  - гривнія.
inUse: булеве значення, що вказує, чи використовується предмет в даний момент.

Додавання об'єктів до масиву:
Додайте не менше 5 різних об'єктів до масиву householdItems, які представляють різні елементи домашнього господарства.

Виведення інформації:
Виведіть в консоль інформацію про всі предмети в масиві, а також окремо про ті, які використовуються в даний момент (inUse дорівнює true).
*/

// ============

let householdItems = [
  {
    name: 'Пральна машина',
    category: 'Побутова техніка',
    price: 12000,
    inUse: true,
  },
  {
    name: 'Мікрохвильова піч',
    category: 'Побутова техніка',
    price: 3500,
    inUse: false,
  },
];

//* Змінна яка виступає у ролі бази даних

const objectsData = [
  {
    name: 'Диван',
    category: 'Меблі',
    price: 15000,
    inUse: true,
  },
  {
    name: 'Тарілки (набір)',
    category: 'Посуд',
    price: 1200,
    inUse: true,
  },
  {
    name: 'Пилосос',
    category: 'Побутова техніка',
    price: 4500,
    inUse: false,
  },
  {
    name: 'Ковдра',
    category: 'Текстиль',
    price: 800,
    inUse: true,
  },
  {
    name: 'Холодильник',
    category: 'Побутова техніка',
    price: 18000,
    inUse: true,
  },
  {
    name: 'Книжкова шафа',
    category: 'Меблі',
    price: 7000,
    inUse: true,
  },
  {
    name: 'Сковорідка',
    category: 'Кухонне приладдя',
    price: 950,
    inUse: true,
  },
  {
    name: 'Кондиціонер',
    category: 'Побутова техніка',
    price: 15000,
    inUse: false,
  },
];

//* Додавання нових обєктів через функцію

function addNewObj(obj) {
  for (let i = 0; i < obj.length; i++) {
    householdItems[householdItems.length] = obj[i];
  }
}

console.log(householdItems); // Масив об'єктів до застосування функції

addNewObj(objectsData)

console.log(householdItems); // Перевірка чи спрацювала функція


//* Виведення даних про усі предмети в масиві householdItems

function printInfo() {
  for (let i = 0; i < householdItems.length; i++) {
    console.log(householdItems[i]);
  }
}

printInfo()

//* Виведення даних про ті обєкти які використовуються

function printInfoInUse() {
  for (let i = 0; i < householdItems.length; i++) {
    if (householdItems[i].inUse === true) {
      console.log(householdItems[i]);
    }
  }
}
printInfoInUse();
