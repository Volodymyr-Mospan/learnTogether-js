// Object.defineProperty()
// Object.defineProperty(об'єкт, назва_властивості, дескриптор)

// const profile = {
//     name: 'Олег',
//     age: 30,
//     height: 180
// };

// // Object.getOwnPropertyDescriptor(об'єкт, назва_властивості)
// console.log(Object.getOwnPropertyDescriptor(profile, 'name'))
// profile.name = "Chupa"
// console.log(profile.name);
// Object.defineProperty(profile, 'name', { writable: false });

// console.log(Object.getOwnPropertyDescriptor(profile, 'name'))
// profile.name = "Oleg"
// console.log(profile.name)

// const profile = {
//     name: 'Олег',
//     details: { age: 30, height: 180, city: 'Київ' },

// };
// Object.defineProperty(profile, 'details', { writable: false });

// // console.log(Object.getOwnPropertyDescriptor(profile, 'details'))
// // profile.details = {}
// // console.log(profile.details);
// profile.details.city = 'Lviv'
// console.log(profile.details);

// const profile = {
//     name: 'Олег',
//     age: 30,
//     height: 180
// };
// Object.defineProperty(profile, 'name', { configurable: false });
// // console.log(Object.getOwnPropertyDescriptor(profile, 'name'))
// // delete profile.name
// // console.log(profile.name);

// Object.defineProperty(profile, 'name', { writable: false });
// console.log(Object.getOwnPropertyDescriptor(profile, 'name'))
// // profile.name = "Maksym"
// // console.log(profile.name);

// Object.defineProperty(profile, 'name', { writable: true });
// console.log(Object.getOwnPropertyDescriptor(profile, 'name'))

// const profile = {
//     name: 'Олег'
// };
// // console.log(Object.getOwnPropertyDescriptor(profile, 'name'))
// Object.defineProperty(profile, 'name', { writable: false });
// // console.log(Object.getOwnPropertyDescriptor(profile, 'name'))

// Object.defineProperty(profile, 'name', { configurable: false });
// console.log(Object.getOwnPropertyDescriptor(profile, 'name'))
// Object.defineProperty(profile, 'name', { writable: true });
// console.log(Object.getOwnPropertyDescriptor(profile, 'name'))

// const profile = {
//     name: 'Олег',
//     details: { age: 30, height: 180, city: 'Київ' },

// };
// Object.defineProperty(profile.details, 'height', { writable: false });

// console.log(Object.getOwnPropertyDescriptor(profile.details, 'height'))
// profile.details = {}
// console.log(profile.details);


// let numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`Element at index ${i} has value ${numbers[i]}`);
// }

// (let i = 0; i < numbers.length; i++)
// (let i = 0; i <= numbers.length - 1; i++)
// let length = numbers.length
// for (let i = 0; i < length; i++) {
//     console.log(`Element at index ${i} has value ${numbers[i]}`);
//   }


// let sparseArray = [10, , 30, , 50];

// for (let i = 0; i < sparseArray.length; i++) {
//     // console.log(sparseArray[i]);
//     // if (sparseArray[i] !== undefined ) {
//     //     console.log(sparseArray[i]);

//     // } else {
//     //     console.log(`значення в елементі з індексом ${i} відсутнє`);

//     // }

//     // if (!sparseArray[i]) {
//     //     continue;
//     // }
//     // console.log(sparseArray[i]);

//     if (i in sparseArray) {
//         console.log(sparseArray[i]);

//     } else {
//         console.log(`значення в елементі з індексом ${i} відсутнє`);

//     }
// }


// let sparseArray = [10, 0, 30, undefined, 50];

// for (let i = 0; i < sparseArray.length; i++) {
//     //   if (i in sparseArray) {
//     //     console.log(sparseArray[i]);

//     // } else {
//     //     console.log(`значення в елементі з індексом ${i} відсутнє`);

//     // }

//     if (!sparseArray[i]) {
//         continue;
//     }
//     console.log(sparseArray[i]);
// }

// const values = []
// values.length = 3
// const values = Array(3)
// const values = new Array(3)
// console.log(values);
// console.log(values.length);

// for (let i = 0; i < values.length; i++) {
//     const value = prompt('?', '...')
//     if (value !== null) {
//         values[i] = value
//     }

// }

// const values = []

// let continueAdding = true

// while (continueAdding) {
//     const value = prompt('?', '...')
//     if (value !== null) {
//         values.push(value)
//     }
//     continueAdding = confirm('Ще одне значення?')
// }
// console.log(values);


// let numbers = [10, 20, 30, 40, 50];
// let numbers = [10, , 30, , 50];
// for (const num of numbers) {
//     console.log(num);

// }

// let str = "JavaScript"
// for (const character of str) {
//     console.log(character);

// }

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// // numbers.forEach((num)=> console.log(num+1));
// numbers.forEach((num, i) => {
//     const result = num * (i + 1)
//     console.log(result);
// });











// КОД ЯКИЙ НЕ МАЄ ВІДНОШЕННЯ ДО УРОКУ

let numberOfFilms =
  Number(prompt('Скільки фільмів переглянули?', 10)) ||
  'Ви ввели невірні дані, перевірьте чи у вас введено число?';
// console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function updateObj(theLastFilm, ratingOfLastFilm) {
  personalMovieDB['movies'][theLastFilm] = ratingOfLastFilm
  console.log(personalMovieDB);
  
}


for (let i = 0; i < numberOfFilms; i++) {
    
    let [theLastFilm, ratingOfLastFilm] = [
      prompt('Останній фільм який переглянули?', 'Sonic') ||
        'Ви ввели невірні дані, перевірьте чи у вас НЕ введено число?',
      Number(prompt('Яку оцінку поставите йому ?', 10)) ||
        'Ви ввели невірні дані, перевірьте чи у вас введено число?',
    ];
}
updateObj(theLastFilm, ratingOfLastFilm);
console.log(personalMovieDB.movies)


