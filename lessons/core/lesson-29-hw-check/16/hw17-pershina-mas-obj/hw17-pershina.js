/**
 * Створення масиву об'єктів householdItems, який буде містити об'єкти домашнього господарства.
 * @typedef {Object} householdItems
 * @property {string} name - назва предмета
  * @property {string} category - категорія предмета
  * @property {number} price - вартість предмета
  * @property {boolean} inUse - чи використовується предмет в даний момент
  * 
Виведення інформації:
, а також окремо про ті, які використовуються в даний момент (inUse дорівнює true).
 */

const householdItems = [
  {
    name: 'пральна машина',
    category: 'побутова техніка',
    price: 15000,
    inUse: true,
  },
  {
    name: 'подушка',
    category: 'постільна білизна',
    price: 500,
    inUse: true,
  },
  {
    name: 'каструля',
    category: 'кухонні предмети',
    price: 400,
    inUse: false,
  },
  {
    name: 'швабра',
    category: 'засоби для прибирання',
    price: 100,
    inUse: false,
  },
  {
    name: 'кровать',
    category: 'зручності',
    price: 20000,
    inUse: true,
  }
];

/**
 * Виведіть в консоль інформацію про всі предмети в масиві
 * @function getItemsInformation
 * @param {*} mas 
 * @example
 * getItemsInformation(householdItems) //
 * Об'єкти домашнього господарства: 
 * Пральна машина. Категорія: "побутова техніка", ціна: 15000грн
 * Подушка. Категорія: "постільна білизна", ціна: 500грн  
 * Каструля. Категорія: "кухонні предмети", ціна: 400грн
 * Швабра. Категорія: "засоби для прибирання", ціна: 100грн
 * Кровать. Категорія: "зручності", ціна: 20000грн
 * 
 */

function getItemsInformation(mas) {
  console.log(`Об'єкти домашнього господарства:`);
  mas.forEach((element) => {
    console.log(
      `${
        String(element.name)[0].toUpperCase() + String(element.name).slice(1)
      }. Категорія: "${element.category}", ціна: ${element.price}грн`
    );
  });
}

/**
 * @function getInUseItems
 * Виводить в консоль назви предметів, які використовуються в даний момент (inUse дорівнює true).
 * @param {*} mas 
 * @returns {string} str
 * @example
 * getInUseItems(householdItems) // Зараз використовуються: пральна машина, подушка, кровать
 */

function getInUseItems(mas) {
  console.log(`Зараз використовуються:`);
  let str = '';
  mas.forEach((element) => {
    if (element.inUse) {
      if (str == '') {
        str += element.name;
      } else {
        str += ', ' + element.name;
      }
    }
  });
  return str;
}

getItemsInformation(householdItems);
console.log(getInUseItems(householdItems));
