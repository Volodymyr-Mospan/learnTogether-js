// const profile = {
//     name: 'Олег',
//     age: 30,
//     height: 180
// }
// console.log(profile);
// delete profile.height
// delete profile.height1
// console.log(profile);

// console.log(Object.keys(profile));
// console.log(Object.values(profile));
// console.log(Object.entries(profile));


// const profile = {
//     name: 'Олег',
//     age: 30,
//     height: 180
// }
// profile.name = 'Chupakabra'
// console.log(profile);

// Object.defineProperty(profile, 'name', {writable: false}) // заборона зміни значення властивості але НЕ видалення
// profile.name = 'Oleg'
// console.log(profile);
// delete profile.name
// console.log(profile);

// Object.defineProperty(profile, 'height', {configurable: false}) // заборона видалення властивості та ???
// delete profile.height // НЕ СПРАЦЮЄ
// console.log(profile);

// profile.name = 'Chupakabra1'
// console.log(profile);

// Object.defineProperty(profile, 'name', {configurable: false}) 
// Object.defineProperty(profile, 'name', {writable: false})
// profile.name = 'Oleg'
// console.log(profile);
