// let car = {
// const car = {
//     color: 'red',
//     make: 'Toyota',
//     model: 'Camry',

//     drive: function () {
//       console.log('Driving...');
//     },
//     whichColor: function () {
//       console.log(`The color of the car is ${this.color}`);
//     }
//   };
//   car.whichColor();
//   car.color = 'blue';
//   car.whichColor();

// let user = {
//     name: 'Ivan',
//     age: 30,
//     email: 'ivan@example.com',
//     sayHello: function () {
//       console.log('Hello, ' + this.name);
//     }
//   };

// let book = {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     pages: 310,
//     read: false,
//     markAsRead: function () {
//       this.read = true;
//     }
//   };

// let recipe = {
//     name: 'Borsch',
//     ingredients: ['beet', 'potato', 'carrot'],
//     time: '1h 30m',
//     cook: function () {
//       console.log('Cooking ' + this.name);
//     }
//   };
//     recipe.cook();

// const obj = {
//     a: 1,
//     say() {
//         console.log(this.a);
//     }
// }
// const fn = obj.say;
// console.log(fn);

// fn();

// let user = {
//     name: 'Ivan',
//     age: 30,
//     email: 'ivan@example.com',

//     sayHello: function () {
//         console.log('Hello, ' + this.name);
//     }
// };

// let user1 = user.name;
// console.log(user1);
// console.log(user.name);

// console.log(user['name']);
// console.log(user.name);

// console.log(user['age']);
// console.log(user.age);


// console.log(user['email']);
// console.log(user.email);

// console.log(user['sayHello']);
// console.log(user.sayHello);



// let user = {
//     name: 'Ivan',
//     age: 30,
//     email: 'ivan@example.com',

//     sayHello: function () {
//         console.log('Hello, ' + this.name);
//     }
// };

// let user1 = 'name';
// console.log(user[user1]);


// const test1-0 = 333


// const strangeKeysObject = {
//     "first name": "Oleksandr",
//     "123": "Це ключ, який є числом",
//     "!special@key#": "Ключ із спеціальними символами",
//     "complex key with spaces and symbols!": "Дуже складний ключ"
//   };
//   console.log(strangeKeysObject);
//     // console.log(strangeKeysObject.first name);
//   console.log(strangeKeysObject["first name"]);
//   console.log(strangeKeysObject["123"]);
//     console.log(strangeKeysObject["!special@key#"]);
//     console.log(strangeKeysObject["complex key with spaces and symbols!"]);
  

const menu = {
    'Борщ': {
        'інгрідієнти': {
            'свинина': 500,
            'буряк': 300,
            'картопля': 200,
            'морква': 100,
            'цибуля': 100,
            'капуста': 100
        },
        скіко: function () {
            let total = 0;
            for (let key in this.інгрідієнти) {
                total += this.інгрідієнти[key];
            }
            return total
        }
    },
    'Піца Маргарита': {
        'інгрідієнти': {
            'помідор': 200,
            'сир': 200,
            'тісто': 300
        },
        скіко: function () {
            let total = 0;
            for (let key in this.інгрідієнти) {
                total += this.інгрідієнти[key];
            }
            return total
        }
    },
    'Тірамісу': {
        'інгрідієнти': {
            'яйця': 2,
            'маскарпоне': 250,
            'цукор': 100,
            'бисквіт': 200,
            'кава': 100,
            'какао': 50
        },
        скіко: function () {
            let total = 0;
            for (let key in this.інгрідієнти) {
                total += this.інгрідієнти[key];
            }
            return total
        }
    }
}

// let anyStrava = menu['Борщ'];
// console.log(anyStrava);
// let anyStrava1 = menu.Борщ.скіко();
// console.log(anyStrava1);
let anyStrava2 = menu['Піца Маргарита'].скіко();
console.log(anyStrava2);